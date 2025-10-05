import { genAI } from "@/lib/gemini";
import { systemPrompt } from "@/consts/systemPrompt";

export async function GET() {
  return new Response(
    JSON.stringify({
      message:
        "Gemini API is active. Send a POST request with { userQuestion, history }. Streaming enabled.",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { userQuestion, history = [] } = body;

    if (!userQuestion) {
      return new Response(
        JSON.stringify({ error: "Missing userQuestion in request body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize Gemini chat
    const chat = genAI
      .getGenerativeModel({
        model: "gemini-2.5-pro",
        systemInstruction: systemPrompt,
      })
      .startChat({
        history: history.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      });

    // Stream response
    let result = await chat.sendMessageStream(userQuestion);
    let fullReply = "";

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const textChunk = chunk.text();
            fullReply += textChunk;
            controller.enqueue(
              `data: ${JSON.stringify({ text: textChunk })}\n\n`
            );
          }

          // Final message to signal end of stream
          controller.enqueue(
            `data: ${JSON.stringify({ done: true, fullReply })}\n\n`
          );
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Gemini streaming error:", error);
    return new Response(
      JSON.stringify({ error: "Streaming failed", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
