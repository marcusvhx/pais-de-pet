import {Router} from 'express'
import { PathController } from '../controller/PathController ';

const pathRouter = Router();


pathRouter.post("/", PathController.create)

pathRouter.get("/:id", PathController.getById)

pathRouter.get("/", PathController.getSteps)

pathRouter.put("/next/:id", PathController.nextStep)

pathRouter.put("/pause/:id", PathController.pause)

pathRouter.delete("/:id", PathController.deleteById)

export {pathRouter};