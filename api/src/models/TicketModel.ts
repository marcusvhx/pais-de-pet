import mongoose, { Document } from "mongoose";
interface iTicket extends Document {
  number: Number;
}
const TicketSchema = new mongoose.Schema<iTicket>({
  number: { type: Number, required: true },
});

export default mongoose.model<iTicket>("TicketModel", TicketSchema);
