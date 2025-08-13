import { Document, Schema, model } from "mongoose";
interface iAppointmentModel extends Document {
  id: String;
  petKindId: Number;
  serviceId: Number;
  employeeId: Number;
  pathId: Number;
}

const AppoinmentSchema = new Schema<iAppointmentModel>({
  id: { type: String, required: [true, "id é obrigatório"] },
  petKindId: { type: Number, required: [true, "raça do pet é obrigatória"] },
  serviceId: { type: Number, required: [true, "serviço é obrigatório"] },
  employeeId: { type: Number, required: [true, "funcionario é obrigatório"] },
  pathId: { type: Number, required: [true, "etatpas são obrigatórias"] },
});

export default model<iAppointmentModel>("Appointment", AppoinmentSchema);