import mongoose from "mongoose";

const ServiceShema = new mongoose.Schema({
    id:Number,
    name:String
})

export default mongoose.model("Service", ServiceShema);