import { connectDB } from "@/lib/mongodb";
import User, { userSchemaDefaults } from "@/models/User";

export async function GET(req, res) {
  const { userId } = await res.params;
  await connectDB();
  const user = await User.findOne({ gID: userId });
  if (!user) {
    return Response.json(
      {
        error: "User not found",
      },
      {
        status: 404,
      }
    );
  }

  for (const [key, value] of Object.entries(userSchemaDefaults)) {
    user[key] = user[key] || value;
  }

  return Response.json({
    id: user.gID,
    name: user.name,
    streak: user.streak,
    weeklyActivity: user.weeklyActivity.split(",").map((e) => +e),
  });
}
