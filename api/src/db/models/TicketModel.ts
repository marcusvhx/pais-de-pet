import mongoose from "mongoose";
const TicketSchema = new mongoose.Schema({
    number: Number
})

export default mongoose.model("TicketModel", TicketSchema  );