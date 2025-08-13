import mongoose, { Document } from "mongoose";

interface iPathModel extends Document {
  id: Number;
  paused: Boolean;
  currentPosition: Number;
  steps: String[];
}
const PathSchema = new mongoose.Schema<iPathModel>({
  id: { type: Number, required: true },
  paused: { type: Boolean, required: true },
  currentPosition: { type: Number, required: true },
  steps: { type: [String], required: true },
});

export default mongoose.model<iPathModel>("PathModel", PathSchema);
