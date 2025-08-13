import TicketModel from "../models/TicketModel";

export class Ticket {
  static async getTicket() {
    const ticket = await TicketModel.findOne();

    if (!ticket) throw new Error("Ticket não encontrado");

    return ticket.number;
  }

  static async updateTicket() {
    const ticket = await TicketModel.findOneAndUpdate(
      {},
      { $inc: { number: 1 } },
      { new: true }
    );
    return ticket?.number;
  }

  static async resetTickets() {
    await TicketModel.findOneAndUpdate({}, { $set: { number: 0 } });
    return { msg: "ticket resetado" };
  }
}
