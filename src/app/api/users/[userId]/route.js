import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

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
  return Response.json({
    id: user.gID,
    name: user.name,
    streak: user.streak,
  });
}
