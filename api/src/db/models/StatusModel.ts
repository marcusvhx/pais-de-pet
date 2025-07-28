import mongoose from "mongoose";
const StatusSchema = new mongoose.Schema({
    id:Number,
    name:String
})

export default mongoose.model("Status", StatusSchema);