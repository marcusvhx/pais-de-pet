"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = setupRoutes;
const appointmentRoutes_1 = require("./appointmentRoutes");
const employeeRoutes_1 = require("./employeeRoutes");
const pathRoutes_1 = require("./pathRoutes");
const servicesRoutes_1 = require("./servicesRoutes");
const petKindRoutes_1 = require("./petKindRoutes");
function setupRoutes(app) {
    app.use("/appointments", appointmentRoutes_1.appointmentRouter);
    app.use("/employees", employeeRoutes_1.employeeRouter);
    app.use("/path", pathRoutes_1.pathRouter);
    app.use("/services", servicesRoutes_1.servicesRouter);
    app.use("/petKind", petKindRoutes_1.petKindRouter);
}
