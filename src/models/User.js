import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  gID: { type: String, required: true },
  name: { type: String, required: true },
  streak: { type: Number, required: true },
  lastActivity: { type: Number, required: true },
  progressTracker: {
    type: Map,
    of: Number,
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
