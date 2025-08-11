import AppointmentModel from "../db/models/AppointmentModel";
import EmployeeModel from "../db/models/EmployeeModel";
import PathModel from "../db/models/PathModel";
import PetKindModel from "../db/models/PetKindModel";
import ServiceModel from "../db/models/ServiceModel";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";
import { Path } from "./Path";
import { Ticket } from "./Ticket";

const ticket = new Ticket();

export class Appointment {
  async createAppointmentId(petKindId: 1 | 2) {
    const suffix = await ticket.getTicket();
    const prefix = petKindId == 1 ? "G" : "C";
    return prefix + String(suffix).padStart(3, "0");
  }

  async create({
    employeeId,
    petKindId,
    serviceId,
    steps,
  }: {
    petKindId: 1 | 2;
    serviceId: number;
    employeeId: number;
    steps: string[];
  }) {
    const idCode = await this.createAppointmentId(petKindId); // codigo de id do trabalho
    const path = await new Path().create(steps);

    const newAppointment = await AppointmentModel.create({
      id: idCode,
      petKindId,
      serviceId,
      employeeId,
      pathId: path?.id,
    });
    await ticket.updateTicket();
    return newAppointment;
  }

  async getById(id: string) {
      const appointment = await AppointmentModel.findOne({ id });
      if (!appointment) {
        throw new ErrorWithStatus("Agendamento não encontrado", 404);
      }

      const employee = await EmployeeModel.findOne({
        id: appointment.employeeId,
      });
      const petKind = await PetKindModel.findOne({ id: appointment.petKindId });
      const service = await ServiceModel.findOne({ id: appointment.serviceId });
      if (!employee || !petKind || !service) {
        console.log("employee:", employee);
        console.log("petKind:", petKind);
        console.log("service:", service);
        throw new ErrorWithStatus("Dados não encontrados", 404);
      }

      const path = await PathModel.findOne({ id: appointment.pathId });

      if (!path) throw new ErrorWithStatus("Etapas não encontradas", 404);

      return {
        id: appointment.id,
        petKind: petKind.specie,
        service: service.name,
        employee: employee.name,
        path,
      };
  }

  async getAll() {
    try {
      const appointments = await AppointmentModel.find();
      if (!appointments || appointments.length === 0) {
        throw new Error("Nenhum agendamento encontrado");
      }
      return await AppointmentModel.find();
    } catch (err) {
      console.error("Erro ao buscar todos os agendamentos");
      throw err;
    }
  }

  async updateById(
    id: string,
    data: Partial<{
      petKindId: number;
      serviceId: number;
      employeeId: number;
      pathId: number;
    }>
  ) {
    return await AppointmentModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string) {
    return await AppointmentModel.findOneAndDelete({ id });
  }

  async deleteAll() {
    return await AppointmentModel.deleteMany();
  }
}
