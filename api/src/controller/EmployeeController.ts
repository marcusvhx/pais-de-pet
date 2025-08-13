import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";
import EmployeeModel from "../models/EmployeeModel";

export class EmployeeController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { name, profession } = req.body;
    try {
      const lastEmployee = await EmployeeModel.findOne().sort({ id: -1 });
      const id = lastEmployee ? lastEmployee.id + 1 : 1;
      console.log(id);
      await EmployeeModel.create({ id, name, profession });

      res.status(201).json({ msg: "funcionário adicionado" });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(_: Request, res: Response, next: NextFunction) {
    try {
      const employees = await EmployeeModel.find();
      res.json(employees);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const employee = await EmployeeModel.findOne({ id });
      if (!employee) {
        throw new ErrorWithStatus("Funcionário não encontrado", 404);
      }
      res.json(employee);
    } catch (err) {
      next(err);
    }
  }

  static async edit(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { name, profession } = req.body;
    try {
      const newEmployee = await EmployeeModel.findOneAndUpdate(
        { id },
        { name, profession },
        { new: true }
      );
      res.json(newEmployee);
    } catch (err) {
      next(err);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await EmployeeModel.findOneAndDelete({ id });
      res.json({ msg: "funcionário deletado" });
    } catch (err) {
      next(err);
    }
  }
}
