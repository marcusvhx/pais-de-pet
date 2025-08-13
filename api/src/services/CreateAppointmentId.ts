import TicketModel from "../models/TicketModel";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";

export async function createAppointmentId(petKindId: 1 | 2) {
  const suffix = await TicketModel.findOne();
    if (!suffix) {
        throw new ErrorWithStatus("Não há tickets", 500);
    }
  const prefix = petKindId == 1 ? "G" : "C";
  return prefix + String(suffix.number).padStart(3, "0");
}
