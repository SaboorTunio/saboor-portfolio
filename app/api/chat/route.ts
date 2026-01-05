import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT } from "@/lib/ai-data";

export async function POST(req: Request) {
  try {
    // 1. Setup Google Client
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing GOOGLE_API_KEY" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // 2. Configure Model with System Instruction (RAG)
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: PORTFOLIO_CONTEXT,
    });

    const { messages } = await req.json();

    // 3. Extract last user message (Gemini SDK handles history differently,
    // but for simple RAG, sending the prompt is often enough.
    // For full history, we map standard messages to Gemini format).
    const lastMessage = messages[messages.length - 1]?.content || "";

    // 4. Generate Stream
    const result = await model.generateContentStream(lastMessage);

    // 5. Convert to ReadableStream for Frontend
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: { "Content-Type": "text/event-stream" },
    });

  } catch (error: any) {
    console.error("🔴 Gemini API Error:", error);

    // Check if it's an API key error or other specific error
    if (error.status === 400 || error.status === 401 || error.status === 403) {
      return NextResponse.json(
        {
          error: "API Authentication Error",
          details: "Invalid or missing API key"
        },
        { status: error.status }
      );
    }

    // Check for quota or billing errors
    if (error.status === 429) {
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