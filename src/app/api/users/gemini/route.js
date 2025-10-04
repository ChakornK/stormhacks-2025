// src/app/api/gemini/route.js
import { systemPrompt } from "@/consts/systemPrompt";
import { genAI } from "@/lib/gemini";

export async function GET() {
  return new Response(
    JSON.stringify({
      message:
        "Gemini API is active. Send a POST request with { userQuestion }.",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { userQuestion } = body;

    if (!userQuestion) {
      return new Response(
        JSON.stringify({ error: "Missing userQuestion in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      systemInstruction: {
        role: "system",
        content: systemPrompt,
      },
    });

    const result = await model.generateContent(userQuestion);
    const reply = result.response.text();

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate response" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
