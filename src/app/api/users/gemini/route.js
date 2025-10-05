import { genAI } from "@/lib/gemini";
import { systemPrompt } from "@/consts/systemPrompt";

export async function GET() {
  return new Response(
    JSON.stringify({
      message:
        "Gemini API is active. Send a POST request with { userQuestion, history }.",
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
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const chat = genAI
      .getGenerativeModel({
        model: "gemini-2.0-flash-lite",
        systemInstruction: systemPrompt,
      })
      .startChat({
        history: [
          ...history.map((msg) => ({
            role: msg.role, // "user" or "model"
            parts: [{ text: msg.content }],
          })),
        ],
        generationConfig: {
          maxOutputTokens: 200, // adjust as needed
        },
      });

    const result = await chat.sendMessage(userQuestion);
    console.log("Raw Gemini result:", result);

    const response = await result.response;
    console.log("Response object:", response);

    const replyText = response.text();
    console.log("Extracted text:", replyText);

    return new Response(
      JSON.stringify({
        reply: replyText,

        history: [
          ...history,
          { role: "user", content: userQuestion },
          { role: "model", content: replyText },
        ],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to generate response",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
