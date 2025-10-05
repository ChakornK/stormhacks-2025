import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { verifyToken } from "../../auth";

export async function POST(req) {
  const { token } = await req.json();
  if (!token) return Response.json({ error: "Missing token" }, { status: 401 });

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
  if (!user) {
    await User.create({
      gID: t.sub,
      name: t.given_name,
      streak: 0,
      lastActivity: Date.now(),
      progressTracker: {},
    });
    return Response.json({
      id: t.sub,
      name: t.given_name,
      streak: 0,
    });
  }
  return Response.json({
    id: user.gID,
    name: user.name,
    streak: user.streak,
  });
}
