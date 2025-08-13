import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";
import ServiceModel from "../models/ServiceModel";

export class ServiceController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { name, employeesIds } = req.body;
    try {
      const lastService = await ServiceModel.findOne().sort({ id: -1 });
      const id = lastService ? lastService.id + 1 : 1;
      const newServices = await ServiceModel.create({ id, name, employeesIds });

      res.status(201).json(newServices);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(_: Request, res: Response, next: NextFunction) {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const service = await ServiceModel.findOne({ id });
      if (!service) {
        throw new ErrorWithStatus("serviços não encontrado", 404);
      }
      res.json(service);
    } catch (err) {
      next(err);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await ServiceModel.findOneAndDelete({ id });
      res.json({ msg: "serviço deletado" });
    } catch (err) {
      next(err);
    }
  }
}
