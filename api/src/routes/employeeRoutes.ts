import {Router} from 'express'
import { EmployeeController } from '../controller/EmployeeController';

const employeeRouter = Router();


employeeRouter.post("/", EmployeeController.create)

employeeRouter.get("/:id", EmployeeController.getById)

employeeRouter.get("/all", EmployeeController.getAll)

employeeRouter.put("/:id", EmployeeController.edit)

employeeRouter.delete("/:id", EmployeeController.deleteById)

export {employeeRouter};