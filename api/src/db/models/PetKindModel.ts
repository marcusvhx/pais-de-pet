import mongoose from "mongoose";
const PetKindSchema = new mongoose.Schema({
    id:Number,
    name:String,
})

export default mongoose.model("PetKind", PetKindSchema);