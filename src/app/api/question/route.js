import { parseQueryParams } from "@/utils/url";
import fs from "node:fs";
import { globalState, getSession } from "@/app/globalState";

const questionBank = {};

for (const unit of fs.readdirSync("./src/questions")) {
  if (!questionBank[unit]) questionBank[unit] = {};
  for (const lesson of fs.readdirSync(`./src/questions/${unit}`)) {
    if (!questionBank[unit][lesson]) questionBank[unit][lesson] = [];
    for (const q of fs.readdirSync(`./src/questions/${unit}/${lesson}`)) {
      questionBank[unit][lesson].push(
        (await import(`../../../questions/${unit}/${lesson}/${q}`)).default
      );
    }
  }
}


export async function GET(req) {
  const query = parseQueryParams(req.url);
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return Response.json({ error: "Missing token" }, { status: 401 });

  const session = getSession(token);
  const unit = query.unit || session.currentUnit;
  const lesson = query.lesson || session.currentLesson;

  if (!unit || !lesson)
    return Response.json({ error: "Missing unit or lesson" }, { status: 400 });

  session.currentUnit = unit;
  session.currentLesson = lesson;

  const questionCollection = questionBank[unit][lesson];
  const question =
    questionCollection[Math.floor(Math.random() * questionCollection.length)];

  const values = question.generateValues();

  session.currentQuestion = question;
  session.expectedAnswer = values.solutions;

  return Response.json({
    text: question.generateText(values.inputs),
  });
}

export async function POST(req) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return Response.json({ error: "Missing token" }, { status: 401 });

  const session = getSession(token);
  const body = await req.json();

  if (!session.expectedAnswer)
    return Response.json({ error: "No active question" }, { status: 400 });

  const correct =
    JSON.stringify(body.answer) === JSON.stringify(session.expectedAnswer);

  return Response.json({ correct });
}
