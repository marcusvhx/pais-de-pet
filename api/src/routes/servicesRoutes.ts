import {Router} from 'express'
import { ServicesController } from '../controller/ServicesController';

const servicesRouter = Router();


servicesRouter.post("/", ServicesController.create)

servicesRouter.get("/:id", ServicesController.getById)

servicesRouter.get("/all", ServicesController.getAll)

servicesRouter.put("/:id", ServicesController.edit)

servicesRouter.delete("/:id", ServicesController.deleteById)

export {servicesRouter};