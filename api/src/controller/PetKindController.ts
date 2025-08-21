import { NextFunction, Request, Response } from "express";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";
import PetKindModel from "../models/PetKindModel";

export class PetKindController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { specie, kind } = req.body;
    try {
      const lastKind = await PetKindModel.findOne().sort({ id: -1 });
      const id = lastKind ? lastKind.id + 1 : 1;
      const newKind = await PetKindModel.create({ id, specie, kind });

      res.status(201).json(newKind);
    } catch (err) {
      next(err);
    }
  }

  static async edit(req: Request, res: Response, next: NextFunction) {
    const { specie, kind } = req.body;
    const { id } = req.params;
    try {
      const editedKind = await PetKindModel.updateOne(
        { id },
        { specie, kind },
        { new: true }
      );

      res.status(200).json(editedKind);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(_: Request, res: Response, next: NextFunction) {
    try {
      const kinds = await PetKindModel.find();
      res.json(kinds);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const kind = await PetKindModel.findOne({ id });
      if (!kind) {
        throw new ErrorWithStatus("serviços não encontrado", 404);
      }
      res.json(kind);
    } catch (err) {
      next(err);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await PetKindModel.findOneAndDelete({ id });
      res.status(204).json({ msg: "raça deletada" });
    } catch (err) {
      next(err);
    }
  }
}
