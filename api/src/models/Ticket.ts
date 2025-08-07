import TicketModel from "../db/models/TicketModel";

export class Ticket {
  async getTicket() {
    try {
      const ticket = await TicketModel.findOne();

      if (!ticket) throw new Error("Ticket não encontrado");

      return ticket.number;
    } catch (err) {
      console.error(err);
      throw new Error("Error buscando Ticket");
    }
  }

  async updateTicket() {
    try {
      await TicketModel.findOneAndUpdate({}, { $inc: { number: 1 } });
    } catch (err) {
      console.error(err);
      throw new Error("Error atualizando Ticket");
    }
  }

  async resetTickets() {
    try {
      await TicketModel.findOneAndUpdate({}, { $set: { number: 0 } });
    } catch (err) {
      console.error(err);
      throw new Error("Error ao reiniciar Tickets");
    }
  }
}
