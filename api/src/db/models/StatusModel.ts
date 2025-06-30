import mongoose from "mongoose";
const StatusSchema = new mongoose.Schema({
    id:String,
    name:String
})

export default mongoose.model("Status", StatusSchema);