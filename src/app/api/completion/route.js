import User from "@/models/User";
import { getSession } from "../globalstate";
import { verifyToken } from "../auth";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return Response.json({ error: "Missing token" }, { status: 401 });

  const body = await req.json();

  const [v, t] = verifyToken(token);
  if (!v) {
    return Response.json(
      {
        error: "Invalid session",
      },
      {
        status: 403,
      }
    );
  }
  await connectDB();
  const user = await User.findOne({ gID: t.sub });

  user.set(
    `progressTracker.${body.unit}`,
    Math.max(+user.progressTracker[body.unit.toString()] || 0, +body.lesson)
  );

  await user.save();

  return Response.json({
    progressTracker: user.progressTracker,
  });
}
