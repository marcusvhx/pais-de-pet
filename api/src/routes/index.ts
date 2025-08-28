import { Express } from "express";
import { employeeRouter } from "./employeeRoutes";
import { pathRouter } from "./pathRoutes";
import { servicesRouter } from "./servicesRoutes";
import { petKindRouter } from "./petKindRoutes";
import { appointmentRouter } from "./AppointmentRoutes";

export function setupRoutes(app: Express) {
  app.use("/appointments", appointmentRouter);
  app.use("/employees", employeeRouter);
  app.use("/path", pathRouter);
  app.use("/services", servicesRouter);
  app.use("/petKind", petKindRouter);
}
