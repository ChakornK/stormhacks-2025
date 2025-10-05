import { parseQueryParams } from "@/utils/url";
import fs from "node:fs";
import {
  getSession,
  setLesson,
  setCurrentQuestion,
  getCurrentQuestion,
  getProgress,
} from "@/app/api/globalstate";

const questionBank = {};
const numberOfQuestions = 10;

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
    return Response.json({ error: "Missing unit/lesson" }, { status: 400 });

  const collection = questionBank[unit][lesson];
  setLesson(token, unit, lesson, numberOfQuestions);

  const question = collection[Math.floor(Math.random() * collection.length)];
  const values = question.generateValues();

  setCurrentQuestion(token, values.inputs, values.solutions);
  const progress = getProgress(token);

  return Response.json({
    text: question.generateText(values.inputs),
    progress,
  });
}

export async function POST(req) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return Response.json({ error: "Missing token" }, { status: 401 });

  const body = await req.json();
  const current = getCurrentQuestion(token);

  if (!current)
    return Response.json({ error: "No active question" }, { status: 400 });

  const correct =
    JSON.stringify(body.answer) === JSON.stringify(current.solution);

  return Response.json({ correct });
}
