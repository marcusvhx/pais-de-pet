import mongoose from "mongoose";
const PetKindSchema = new mongoose.Schema({
    id:String,
    name:String,
})

export default mongoose.model("PetKind", PetKindSchema);