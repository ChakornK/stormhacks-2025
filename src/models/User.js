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
  weeklyActivity: {
    type: [Number],
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

export const userSchemaDefaults = {
  streak: 0,
  lastActivity: 0,
  progressTracker: {},
  weeklyActivity: [0, 0, 0, 0, 0, 0, 0],
};
