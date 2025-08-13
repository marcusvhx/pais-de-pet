import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";
import { Path } from "../services/PathServices";
import PathModel from "../models/PathModel";
import StepModel from "../models/StepModel";

export class PathController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { steps } = req.body;
    try {
      const newPath = await Path.create(steps);
      res.status(201).json({ msg: "path criado" });
    } catch (err) {
      next(err);
    }
  }
  static async getSteps(_: Request, res: Response, next: NextFunction) {
    try {
      const steps = await StepModel.find();
      res.json(steps);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const path = await PathModel.findOne({ id });
      if (!path) {
        throw new ErrorWithStatus("Etapas não encontradas", 404);
      }
      res.json(path);
    } catch (err) {
      next(err);
    }
  }


  static async nextStep(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await Path.nextStep(Number(id));
      res.status(200).json({msg:"etapa avançado"});
    } catch (err) {
      next(err);
    }
  }
  
  static async pause(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await Path.togglePause(Number(id));
      res.status(200).json({msg:"pausado"});
    } catch (err) {
      next(err);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await PathModel.findOneAndDelete({ id });
      res.json({ msg: "path deletado" });
    } catch (err) {
      next(err);
    }
  }
}
