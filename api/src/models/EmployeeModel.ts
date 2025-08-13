import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema({
    id:Number,
    name:String,
    profession:String
})

export default mongoose.model("Employee", EmployeeSchema);