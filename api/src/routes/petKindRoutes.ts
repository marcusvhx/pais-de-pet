import { Router } from "express";
import { PetKindController } from "../controller/PetKindController";

const petKindRouter = Router();

petKindRouter.post("/", PetKindController.create);

petKindRouter.get("/:id", PetKindController.getById);

petKindRouter.get("/", PetKindController.getAll);

petKindRouter.put("/:id", PetKindController.edit);

petKindRouter.delete("/:id", PetKindController.deleteById);

export { petKindRouter };
