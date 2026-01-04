// app/api/chat/route.ts
import OpenAI from 'openai';
import { PORTFOLIO_CONTEXT } from '@/lib/ai-data';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Prepend the system message with the portfolio context
    const messagesWithContext = [
      { role: 'system', content: PORTFOLIO_CONTEXT },
      ...messages
    ];

    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-exp:free',
      messages: messagesWithContext,
      stream: true,
    });

    // Create a ReadableStream to handle the streaming response
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}