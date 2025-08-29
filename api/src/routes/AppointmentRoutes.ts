import {Router} from 'express'
import { AppointmentController } from '../controller/AppointmentController';

const appointmentRouter = Router();


appointmentRouter.post("/", AppointmentController.schedule)

appointmentRouter.get("/", AppointmentController.getAll)

appointmentRouter.get("/:id", AppointmentController.getById)

appointmentRouter.put("/:id", AppointmentController.edit)

appointmentRouter.delete("/:id", AppointmentController.deleteById)

export {appointmentRouter};