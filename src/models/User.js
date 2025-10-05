import mongoose from "mongoose";

const ProgressSchema = new mongoose.Schema({
  completedTasks: { type: Number, required: true },
});

const UserSchema = new mongoose.Schema({
  gID: { type: String, required: true },
  name: { type: String, required: true },
  streak: { type: Number, required: true },
  lastActivity: { type: Number, required: true },
  progressTracker: {
    type: Map,
    of: ProgressSchema,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
