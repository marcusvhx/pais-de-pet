import mongoose from "mongoose";
const AppoinmentSchema = new mongoose.Schema({
    id:String,
    petKindId:Number,
    serviceId:Number,
    employeeId:Number,
    statusId:Number,
})

export default mongoose.model("Appointment", AppoinmentSchema);