import { parseQueryParams } from "@/utils/url";
import fs from "node:fs";

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

  if (!query.unit || !query.lesson) {
    return Response.json(
      {
        error: "Invalid request",
      },
      {
        status: 500,
      }
    );
  }

  const questionCollection = questionBank[query.unit][query.lesson];
  const question =
    questionCollection[Math.floor(Math.random() * questionCollection.length)];

  const values = question.generateValues();

  // do something with values.solutions

  return Response.json({
    text: question.generateText(values.inputs),
  });
}
