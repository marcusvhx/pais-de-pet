import mongoose from "mongoose";
const TicketId = new mongoose.Schema({
    number: Number
})

export default mongoose.model("TicketId", TicketId  );