import {Router} from 'express'
import { AppointmentController } from '../controller/AppointmentController';

const appointmentRouter = Router();


appointmentRouter.post("/", AppointmentController.schedule)

appointmentRouter.get("/:id", AppointmentController.getById)

appointmentRouter.get("/all", AppointmentController.getAll)

appointmentRouter.put("/:id", AppointmentController.edit)

appointmentRouter.delete("/:id", AppointmentController.deleteById)

export {appointmentRouter};