import mongoose from "mongoose";

const PathSchema = new mongoose.Schema({
  id: Number,
  paused:Boolean,
  currentPosition: Number,
  steps: [String],
});

export default mongoose.model("PathModel", PathSchema);
