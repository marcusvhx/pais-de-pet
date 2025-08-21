import mongoose from "mongoose";
interface iPetKind {
  id: Number;
  specie: String;
  kind: String;
}
const PetKindSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  specie: { type: String, required: true },
  kind: { type: String, required: true },
});

export default mongoose.model("PetKind", PetKindSchema);
