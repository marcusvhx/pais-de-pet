import mongoose from "mongoose";
import { Document } from "mongoose";

interface iServiceModel extends Document {
  id: Number;
  name: String;
  employeesIds: Number[];
}

const ServiceShema = new mongoose.Schema<iServiceModel>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  employeesIds: { type: [Number], required: true },
});

export default mongoose.model("Service", ServiceShema);
