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

// for (const unit of fs.readdirSync("./src/questions")) {
//   if (!questionBank[unit]) questionBank[unit] = {};
//   for (const lesson of fs.readdirSync(`./src/questions/${unit}`)) {
//     if (!questionBank[unit][lesson]) questionBank[unit][lesson] = [];
//     for (const q of fs.readdirSync(`./src/questions/${unit}/${lesson}`)) {
//       questionBank[unit][lesson].push(
//         (await import(`../../../questions/${unit}/${lesson}/${q}`)).default
//       );
//     }
//   }
// }

// please ignore this 😭🙏
// ts so mid 💔🎋
questionBank["1"] = {};
questionBank["1"]["1"] = [];
questionBank["1"]["2"] = [];
questionBank["1"]["3"] = [];
questionBank["1"]["4"] = [];
questionBank["1"]["5"] = [];
questionBank["2"] = {};
questionBank["2"]["1"] = [];
questionBank["2"]["2"] = [];
questionBank["2"]["3"] = [];
questionBank["2"]["4"] = [];
questionBank["2"]["5"] = [];
questionBank["3"] = {};
questionBank["3"]["1"] = [];
questionBank["3"]["2"] = [];
questionBank["3"]["3"] = [];
questionBank["3"]["4"] = [];
questionBank["3"]["5"] = [];
questionBank["4"] = {};
questionBank["4"]["1"] = [];
questionBank["4"]["2"] = [];
questionBank["4"]["3"] = [];
questionBank["4"]["4"] = [];
questionBank["4"]["5"] = [];
questionBank["5"] = {};
questionBank["5"]["1"] = [];
questionBank["5"]["2"] = [];
questionBank["5"]["3"] = [];
questionBank["5"]["4"] = [];
questionBank["5"]["5"] = [];
questionBank["1"]["1"].push(
  (await import(`../../../questions/1/1/1.js`)).default
);
questionBank["1"]["1"].push(
  (await import(`../../../questions/1/1/2.js`)).default
);
questionBank["1"]["1"].push(
  (await import(`../../../questions/1/1/3.js`)).default
);
questionBank["1"]["1"].push(
  (await import(`../../../questions/1/1/4.js`)).default
);
questionBank["1"]["1"].push(
  (await import(`../../../questions/1/1/5.js`)).default
);
questionBank["1"]["2"].push(
  (await import(`../../../questions/1/2/1.js`)).default
);
questionBank["1"]["2"].push(
  (await import(`../../../questions/1/2/2.js`)).default
);
questionBank["1"]["2"].push(
  (await import(`../../../questions/1/2/3.js`)).default
);
questionBank["1"]["2"].push(
  (await import(`../../../questions/1/2/4.js`)).default
);
questionBank["1"]["2"].push(
  (await import(`../../../questions/1/2/5.js`)).default
);
questionBank["1"]["3"].push(
  (await import(`../../../questions/1/3/1.js`)).default
);
questionBank["1"]["3"].push(
  (await import(`../../../questions/1/3/2.js`)).default
);
questionBank["1"]["3"].push(
  (await import(`../../../questions/1/3/3.js`)).default
);
questionBank["1"]["3"].push(
  (await import(`../../../questions/1/3/4.js`)).default
);
questionBank["1"]["3"].push(
  (await import(`../../../questions/1/3/5.js`)).default
);
questionBank["1"]["4"].push(
  (await import(`../../../questions/1/4/1.js`)).default
);
questionBank["1"]["4"].push(
  (await import(`../../../questions/1/4/2.js`)).default
);
questionBank["1"]["4"].push(
  (await import(`../../../questions/1/4/3.js`)).default
);
questionBank["1"]["4"].push(
  (await import(`../../../questions/1/4/4.js`)).default
);
questionBank["1"]["4"].push(
  (await import(`../../../questions/1/4/5.js`)).default
);
questionBank["1"]["5"].push(
  (await import(`../../../questions/1/5/1.js`)).default
);
questionBank["1"]["5"].push(
  (await import(`../../../questions/1/5/2.js`)).default
);
questionBank["1"]["5"].push(
  (await import(`../../../questions/1/5/3.js`)).default
);
questionBank["1"]["5"].push(
  (await import(`../../../questions/1/5/4.js`)).default
);
questionBank["1"]["5"].push(
  (await import(`../../../questions/1/5/5.js`)).default
);
questionBank["2"]["1"].push(
  (await import(`../../../questions/2/1/1.js`)).default
);
questionBank["2"]["1"].push(
  (await import(`../../../questions/2/1/2.js`)).default
);
questionBank["2"]["1"].push(
  (await import(`../../../questions/2/1/3.js`)).default
);
questionBank["2"]["1"].push(
  (await import(`../../../questions/2/1/4.js`)).default
);
questionBank["2"]["1"].push(
  (await import(`../../../questions/2/1/5.js`)).default
);
questionBank["2"]["2"].push(
  (await import(`../../../questions/2/2/1.js`)).default
);
questionBank["2"]["2"].push(
  (await import(`../../../questions/2/2/2.js`)).default
);
questionBank["2"]["2"].push(
  (await import(`../../../questions/2/2/3.js`)).default
);
questionBank["2"]["2"].push(
  (await import(`../../../questions/2/2/4.js`)).default
);
questionBank["2"]["2"].push(
  (await import(`../../../questions/2/2/5.js`)).default
);
questionBank["2"]["3"].push(
  (await import(`../../../questions/2/3/1.js`)).default
);
questionBank["2"]["3"].push(
  (await import(`../../../questions/2/3/2.js`)).default
);
questionBank["2"]["3"].push(
  (await import(`../../../questions/2/3/3.js`)).default
);
questionBank["2"]["3"].push(
  (await import(`../../../questions/2/3/4.js`)).default
);
questionBank["2"]["3"].push(
  (await import(`../../../questions/2/3/5.js`)).default
);
questionBank["2"]["4"].push(
  (await import(`../../../questions/2/4/1.js`)).default
);
questionBank["2"]["4"].push(
  (await import(`../../../questions/2/4/2.js`)).default
);
questionBank["2"]["4"].push(
  (await import(`../../../questions/2/4/3.js`)).default
);
questionBank["2"]["4"].push(
  (await import(`../../../questions/2/4/4.js`)).default
);
questionBank["2"]["4"].push(
  (await import(`../../../questions/2/4/5.js`)).default
);
questionBank["2"]["5"].push(
  (await import(`../../../questions/2/5/1.js`)).default
);
questionBank["2"]["5"].push(
  (await import(`../../../questions/2/5/2.js`)).default
);
questionBank["2"]["5"].push(
  (await import(`../../../questions/2/5/3.js`)).default
);
questionBank["2"]["5"].push(
  (await import(`../../../questions/2/5/4.js`)).default
);
questionBank["2"]["5"].push(
  (await import(`../../../questions/2/5/5.js`)).default
);
questionBank["3"]["1"].push(
  (await import(`../../../questions/3/1/1.js`)).default
);
questionBank["3"]["1"].push(
  (await import(`../../../questions/3/1/2.js`)).default
);
questionBank["3"]["1"].push(
  (await import(`../../../questions/3/1/3.js`)).default
);
questionBank["3"]["1"].push(
  (await import(`../../../questions/3/1/4.js`)).default
);
questionBank["3"]["1"].push(
  (await import(`../../../questions/3/1/5.js`)).default
);
questionBank["3"]["2"].push(
  (await import(`../../../questions/3/2/1.js`)).default
);
questionBank["3"]["2"].push(
  (await import(`../../../questions/3/2/2.js`)).default
);
questionBank["3"]["2"].push(
  (await import(`../../../questions/3/2/3.js`)).default
);
questionBank["3"]["2"].push(
  (await import(`../../../questions/3/2/4.js`)).default
);
questionBank["3"]["2"].push(
  (await import(`../../../questions/3/2/5.js`)).default
);
questionBank["3"]["3"].push(
  (await import(`../../../questions/3/3/1.js`)).default
);
questionBank["3"]["3"].push(
  (await import(`../../../questions/3/3/2.js`)).default
);
questionBank["3"]["3"].push(
  (await import(`../../../questions/3/3/3.js`)).default
);
questionBank["3"]["3"].push(
  (await import(`../../../questions/3/3/4.js`)).default
);
questionBank["3"]["3"].push(
  (await import(`../../../questions/3/3/5.js`)).default
);
questionBank["3"]["4"].push(
  (await import(`../../../questions/3/4/1.js`)).default
);
questionBank["3"]["4"].push(
  (await import(`../../../questions/3/4/2.js`)).default
);
questionBank["3"]["4"].push(
  (await import(`../../../questions/3/4/3.js`)).default
);
questionBank["3"]["4"].push(
  (await import(`../../../questions/3/4/4.js`)).default
);
questionBank["3"]["4"].push(
  (await import(`../../../questions/3/4/5.js`)).default
);
questionBank["3"]["5"].push(
  (await import(`../../../questions/3/5/1.js`)).default
);
questionBank["3"]["5"].push(
  (await import(`../../../questions/3/5/2.js`)).default
);
questionBank["3"]["5"].push(
  (await import(`../../../questions/3/5/3.js`)).default
);
questionBank["3"]["5"].push(
  (await import(`../../../questions/3/5/4.js`)).default
);
questionBank["3"]["5"].push(
  (await import(`../../../questions/3/5/5.js`)).default
);
questionBank["4"]["1"].push(
  (await import(`../../../questions/4/1/1.js`)).default
);
questionBank["4"]["1"].push(
  (await import(`../../../questions/4/1/2.js`)).default
);
questionBank["4"]["1"].push(
  (await import(`../../../questions/4/1/3.js`)).default
);
questionBank["4"]["1"].push(
  (await import(`../../../questions/4/1/4.js`)).default
);
questionBank["4"]["1"].push(
  (await import(`../../../questions/4/1/5.js`)).default
);
questionBank["4"]["2"].push(
  (await import(`../../../questions/4/2/1.js`)).default
);
questionBank["4"]["2"].push(
  (await import(`../../../questions/4/2/2.js`)).default
);
questionBank["4"]["2"].push(
  (await import(`../../../questions/4/2/3.js`)).default
);
questionBank["4"]["2"].push(
  (await import(`../../../questions/4/2/4.js`)).default
);
questionBank["4"]["2"].push(
  (await import(`../../../questions/4/2/5.js`)).default
);
questionBank["4"]["3"].push(
  (await import(`../../../questions/4/3/1.js`)).default
);
questionBank["4"]["3"].push(
  (await import(`../../../questions/4/3/2.js`)).default
);
questionBank["4"]["3"].push(
  (await import(`../../../questions/4/3/3.js`)).default
);
questionBank["4"]["3"].push(
  (await import(`../../../questions/4/3/4.js`)).default
);
questionBank["4"]["3"].push(
  (await import(`../../../questions/4/3/5.js`)).default
);
questionBank["4"]["4"].push(
  (await import(`../../../questions/4/4/1.js`)).default
);
questionBank["4"]["4"].push(
  (await import(`../../../questions/4/4/2.js`)).default
);
questionBank["4"]["4"].push(
  (await import(`../../../questions/4/4/3.js`)).default
);
questionBank["4"]["4"].push(
  (await import(`../../../questions/4/4/4.js`)).default
);
questionBank["4"]["4"].push(
  (await import(`../../../questions/4/4/5.js`)).default
);
questionBank["4"]["5"].push(
  (await import(`../../../questions/4/5/1.js`)).default
);
questionBank["4"]["5"].push(
  (await import(`../../../questions/4/5/2.js`)).default
);
questionBank["4"]["5"].push(
  (await import(`../../../questions/4/5/3.js`)).default
);
questionBank["4"]["5"].push(
  (await import(`../../../questions/4/5/4.js`)).default
);
questionBank["4"]["5"].push(
  (await import(`../../../questions/4/5/5.js`)).default
);
questionBank["5"]["1"].push(
  (await import(`../../../questions/5/1/1.js`)).default
);
questionBank["5"]["1"].push(
  (await import(`../../../questions/5/1/2.js`)).default
);
questionBank["5"]["1"].push(
  (await import(`../../../questions/5/1/3.js`)).default
);
questionBank["5"]["1"].push(
  (await import(`../../../questions/5/1/4.js`)).default
);
questionBank["5"]["1"].push(
  (await import(`../../../questions/5/1/5.js`)).default
);
questionBank["5"]["2"].push(
  (await import(`../../../questions/5/2/1.js`)).default
);
questionBank["5"]["2"].push(
  (await import(`../../../questions/5/2/2.js`)).default
);
questionBank["5"]["2"].push(
  (await import(`../../../questions/5/2/3.js`)).default
);
questionBank["5"]["2"].push(
  (await import(`../../../questions/5/2/4.js`)).default
);
questionBank["5"]["2"].push(
  (await import(`../../../questions/5/2/5.js`)).default
);
questionBank["5"]["3"].push(
  (await import(`../../../questions/5/3/1.js`)).default
);
questionBank["5"]["3"].push(
  (await import(`../../../questions/5/3/2.js`)).default
);
questionBank["5"]["3"].push(
  (await import(`../../../questions/5/3/3.js`)).default
);
questionBank["5"]["3"].push(
  (await import(`../../../questions/5/3/4.js`)).default
);
questionBank["5"]["3"].push(
  (await import(`../../../questions/5/3/5.js`)).default
);
questionBank["5"]["4"].push(
  (await import(`../../../questions/5/4/1.js`)).default
);
questionBank["5"]["4"].push(
  (await import(`../../../questions/5/4/2.js`)).default
);
questionBank["5"]["4"].push(
  (await import(`../../../questions/5/4/3.js`)).default
);
questionBank["5"]["4"].push(
  (await import(`../../../questions/5/4/4.js`)).default
);
questionBank["5"]["4"].push(
  (await import(`../../../questions/5/4/5.js`)).default
);
questionBank["5"]["5"].push(
  (await import(`../../../questions/5/5/1.js`)).default
);
questionBank["5"]["5"].push(
  (await import(`../../../questions/5/5/2.js`)).default
);
questionBank["5"]["5"].push(
  (await import(`../../../questions/5/5/3.js`)).default
);
questionBank["5"]["5"].push(
  (await import(`../../../questions/5/5/4.js`)).default
);
questionBank["5"]["5"].push(
  (await import(`../../../questions/5/5/5.js`)).default
);

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
