import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT } from "@/lib/ai-data";

// 1. Initialize Client with OpenRouter Base URL and Headers
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "X-Title": "Saboor Portfolio",
  },
});

export async function POST(req: Request) {
  try {
    // 2. Parse Body
    const { messages } = await req.json();

    if (!process.env.OPENROUTER_API_KEY) {
      console.error("❌ Missing OPENROUTER_API_KEY in .env.local");
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    console.log("📩 Chat API Request Received");

    // 3. Create Completion
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free", // Ensure this model ID is valid
      messages: [
        { role: "system", content: PORTFOLIO_CONTEXT },
        ...messages,
      ],
      stream: true,
    });

    // 4. Return Stream (Standard method for Next.js App Router)
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
        } catch (error) {
          console.error("🔥 Stream processing error:", error);
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: { "Content-Type": "text/event-stream" },
    });

  } catch (error: any) {
    // 5. Log the REAL error to the terminal
    console.error("🔥 Chat API Error:", error);

    // Check if it's a rate limit error (429) or other specific API errors
    // OpenAI error objects may have different properties depending on the error type
    if (error.status === 429 || (error.error && error.error.code === 'rate_limit_exceeded')) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          details: "Too many requests. Please try again later."
        },
        { status: 429 }
      );
    }

    // For other errors, return a 500
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}