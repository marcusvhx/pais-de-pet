import mongoose from "mongoose";
const PetKindSchema = new mongoose.Schema({
    id:Number,
    specie:String,
    kind:String,
})

export default mongoose.model("PetKind", PetKindSchema);