import { connectDB } from "@/lib/mongodb";
import User, { userSchemaDefaults } from "@/models/User";
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
      weeklyActivity: [0, 0, 0, 0, 0, 0, 0].map((e, i) =>
        new Date().getUTCDay() === i ? e + 1 : e
      ),
    });
    return Response.json({
      id: t.sub,
      name: t.given_name,
      streak: 0,
      progressTracker: {},
      weeklyActivity: [0, 0, 0, 0, 0, 0, 0].map((e, i) =>
        new Date().getUTCDay() === i ? e + 1 : e
      ),
    });
  }

  for (const [key, defaultVal] of Object.entries(userSchemaDefaults)) {
    user[key] = user[key] || defaultVal;
  }

  const ld = new Date(user.lastActivity);
  const cd = new Date();
  const fns = ["getUTCFullYear", "getUTCMonth", "getUTCDate"];
  const shouldIncrWeeklyAc =
    fns.map((e) => ld[e]()).join("-") !== fns.map((e) => cd[e]()).join("-");

  user.lastActivity = Date.now();
  if (shouldIncrWeeklyAc) {
    user.weeklyActivity = user.weeklyActivity.map((e, i) =>
      new Date().getUTCDay() === i ? e + 1 : e
    );
  }

  const shouldIncrStreak =
    (ld.getUTCFullYear() === cd.getUTCFullYear() &&
      ((ld.getUTCMonth() === cd.getUTCMonth() &&
        ld.getUTCDate() + 1 === cd.getUTCDate()) ||
        (ld.getUTCMonth() + 1 === cd.getUTCMonth() &&
          cd.getUTCDate() - ld.getUTCDate() === 1))) ||
    (ld.getUTCFullYear() + 1 === cd.getUTCFullYear() &&
      cd.getUTCMonth() === 0 &&
      cd.getUTCDate() - ld.getUTCDate() === 1);

  if (shouldIncrStreak) {
    user.streak++;
  } else if (shouldIncrWeeklyAc) {
    user.streak = 0;
  }

  await user.save();

  return Response.json({
    id: user.gID,
    name: user.name,
    streak: user.streak,
    progressTracker: user.progressTracker,
    weeklyActivity: user.weeklyActivity,
  });
}
