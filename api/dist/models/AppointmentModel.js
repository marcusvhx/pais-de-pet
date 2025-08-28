"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AppoinmentSchema = new mongoose_1.Schema({
    id: { type: String, required: [true, "id é obrigatório"] },
    petKindId: { type: Number, required: [true, "raça do pet é obrigatória"] },
    serviceId: { type: Number, required: [true, "serviço é obrigatório"] },
    employeeId: { type: Number, required: [true, "funcionario é obrigatório"] },
    pathId: { type: Number, required: [true, "etatpas são obrigatórias"] },
});
exports.default = (0, mongoose_1.model)("Appointment", AppoinmentSchema);
