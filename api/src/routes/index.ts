import {Express}from "express"
import { appointmentRouter } from "./AppointmentRoutes"
import { employeeRouter } from "./employeeRoutes"
import { pathRouter } from "./pathRoutes"

export function setupRoutes(app:Express){
    app.use("/appointments",appointmentRouter)
    app.use("/employee",employeeRouter)
    app.use("/path",pathRouter)
}