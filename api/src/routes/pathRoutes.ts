import {Router} from 'express'
import { PathController } from '../controller/PathController ';

const pathRouter = Router();


pathRouter.post("/", PathController.create)

pathRouter.get("/:id", PathController.getById)

pathRouter.get("/all", PathController.getSteps)

pathRouter.put("/next", PathController.nextStep)

pathRouter.put("/pause", PathController.pause)

pathRouter.delete("/:id", PathController.deleteById)

export {pathRouter};