import TicketIdModel from "../db/models/TicketIdModel";

async function createId(petKindId: 1 | 2) {
  const ticket = await TicketIdModel.findOne();
  if (!ticket) throw new Error("TicketId not found");

  const prefix = petKindId == 1 ? "G" : "C";
  TicketIdModel.updateOne({}, { $inc: { number: 1 } }).catch((err) => {
    console.error("Error updating TicketId")
    throw new Error(err);

  });
  return prefix + String(ticket.number).padStart(3, "0");
}

export { createId };
