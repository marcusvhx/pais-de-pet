import AppointmentModel from "../db/models/AppointmentModel";
import EmployeeModel from "../db/models/EmployeeModel";
import PathModel from "../db/models/PathModel";
import PetKindModel from "../db/models/PetKindModel";
import ServiceModel from "../db/models/ServiceModel";
import { Path } from "./Path";
import { Ticket } from "./Ticket";

const ticket = new Ticket()

export class Appointment {

  async createAppointmentId(petKindId: 1 | 2) {
    const suff = await ticket.getTicket();
    const prefix = petKindId == 1 ? "G" : "C";
    return prefix + String(suff).padStart(3, "0");
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
    try {
      const appointment = await AppointmentModel.findOne({ id: id });

      if (!appointment) {
        throw Error("Agendamento não encontrado");
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
        throw Error("Dados não encontrados");
      }

      const path = await PathModel.findOne({ id: appointment.pathId });

      if (!path) throw Error("Etapas não encontradas");

      return {
        id: appointment.id,
        petKind: petKind.specie,
        service: service.name,
        employee: employee.name,
        path,
      };
    } catch (err) {
      console.error("Erro ao buscar agendamento");
      throw err;
    }
  }

  async getAll() {
    return await AppointmentModel.find();
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
    return await AppointmentModel.findOneAndDelete({id});
  }

  async deleteAll() {
    return await AppointmentModel.deleteMany();
  }
}
