import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";
import AppointmentModel from "../models/AppointmentModel";
import EmployeeModel from "../models/EmployeeModel";
import PetKindModel from "../models/PetKindModel";
import ServiceModel from "../models/ServiceModel";
import PathModel from "../models/PathModel";
import { createAppointmentId } from "../services/CreateAppointmentId";
import { Path } from "../services/PathServices";
import { Ticket } from "../services/TicketServices";

export class AppointmentController {
  static async schedule(req: Request, res: Response, next: NextFunction) {
    const {
      petKindId, // id da raça do pet
      serviceId, // id do trabalho
      employeeId, // id do funcionario responsavel
      steps, // etapas do trabalho
    }: {
      petKindId: 1 | 2;
      serviceId: number;
      employeeId: number;
      steps: string[];
    } = req.body;

    if (petKindId > 2 || petKindId < 1)
      throw new ErrorWithStatus("Id da raça inválida", 400);

    try {
      const idCode = await createAppointmentId(petKindId); // codigo de id do trabalho
      const path = await Path.create(steps);

      const newAppointment = await AppointmentModel.create({
        id: idCode,
        petKindId,
        serviceId,
        employeeId,
        pathId: path?.id,
      });
      await Ticket.updateTicket();

      res.json(newAppointment);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const apt = await AppointmentModel.findOne({ id });
      if (!apt) {
        throw new ErrorWithStatus("Agendamento não encontrado", 404);
      }

      const employee = await EmployeeModel.findOne({ id: apt.employeeId });
      const petKind = await PetKindModel.findOne({ id: apt.petKindId });
      const service = await ServiceModel.findOne({ id: apt.serviceId });

      if (!employee || !petKind || !service) {
        console.log("employee:", employee);
        console.log("petKind:", petKind);
        console.log("service:", service);
        throw new ErrorWithStatus("Dados não encontrados", 404);
      }

      const path = await PathModel.findOne({ id: apt.pathId });

      if (!path) throw new ErrorWithStatus("Etapas não encontradas", 404);

      res.json({
        id: apt.id,
        petKind: petKind.specie,
        service: service.name,
        employee: { name: employee.name, id: employee.id },
        path,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(_: Request, res: Response, next: NextFunction) {
    try {
      const appointments = await AppointmentModel.find();
      res.json(appointments);
    } catch (err) {
      next(err);
    }
  }

  static async edit(req: Request, res: Response, next: NextFunction) {
    const { petKindId, serviceId, employeeId, pathId } = req.body;
    const { id } = req.params;

    try {
      await AppointmentModel.findOneAndUpdate(
        { id },
        {
          petKindId,
          serviceId,
          employeeId,
          pathId,
        }
      );
      res.send("Atualizado com sucesso");
    } catch (err) {
      next(err);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await AppointmentModel.findOneAndDelete({ id });
      res.send("deletado: " + id);
    } catch (err) {
      next(err);
    }
  }
}
