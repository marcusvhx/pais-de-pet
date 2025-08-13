import PathModel from "../models/PathModel";
import TicketModel from "../models/TicketModel";

export class Path {
  static async create(steps: string[]) {
    const ticket = await TicketModel.findOne()
    const path = await PathModel.create({
      id: ticket.number,
      paused: false,
      currentPosition: 0,
      steps: steps,
    });

    return path;
  }

  static async nextStep(id: number) {
    const path = await PathModel.findOneAndUpdate(
      { id },
      { $inc: { currentPosition: 1 } },
      { new: true }
    );
    return path;
  }

  static async togglePause(id: number) {
    const path = await PathModel.findOneAndUpdate(
      { id },
      { $set: { paused: { $not: "$paused" } } },
      { new: true }
    );
    return { msg: "operação bem sucedida", paused: path?.paused };
  }

}
