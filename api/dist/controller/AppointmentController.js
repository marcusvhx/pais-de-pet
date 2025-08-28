"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentController = void 0;
const ErrorWithStatus_1 = require("../utils/ErrorWithStatus");
const AppointmentModel_1 = __importDefault(require("../models/AppointmentModel"));
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
const PetKindModel_1 = __importDefault(require("../models/PetKindModel"));
const ServiceModel_1 = __importDefault(require("../models/ServiceModel"));
const PathModel_1 = __importDefault(require("../models/PathModel"));
const CreateAppointmentId_1 = require("../services/CreateAppointmentId");
const PathServices_1 = require("../services/PathServices");
const TicketServices_1 = require("../services/TicketServices");
class AppointmentController {
    static schedule(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { petKindId, // id da raça do pet
            serviceId, // id do trabalho
            employeeId, // id do funcionario responsavel
            steps, // etapas do trabalho
             } = req.body;
            if (petKindId > 2 || petKindId < 1)
                throw new ErrorWithStatus_1.ErrorWithStatus("Id da raça inválida", 400);
            try {
                const idCode = yield (0, CreateAppointmentId_1.createAppointmentId)(petKindId); // codigo de id do trabalho
                const path = yield PathServices_1.Path.create(steps);
                const newAppointment = yield AppointmentModel_1.default.create({
                    id: idCode,
                    petKindId,
                    serviceId,
                    employeeId,
                    pathId: path === null || path === void 0 ? void 0 : path.id,
                });
                yield TicketServices_1.Ticket.updateTicket();
                res.json(newAppointment);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const apt = yield AppointmentModel_1.default.findOne({ id });
                if (!apt) {
                    throw new ErrorWithStatus_1.ErrorWithStatus("Agendamento não encontrado", 404);
                }
                const employee = yield EmployeeModel_1.default.findOne({ id: apt.employeeId });
                const petKind = yield PetKindModel_1.default.findOne({ id: apt.petKindId });
                const service = yield ServiceModel_1.default.findOne({ id: apt.serviceId });
                if (!employee || !petKind || !service) {
                    console.log("employee:", employee);
                    console.log("petKind:", petKind);
                    console.log("service:", service);
                    throw new ErrorWithStatus_1.ErrorWithStatus("Dados não encontrados", 404);
                }
                const path = yield PathModel_1.default.findOne({ id: apt.pathId });
                if (!path)
                    throw new ErrorWithStatus_1.ErrorWithStatus("Etapas não encontradas", 404);
                res.json({
                    id: apt.id,
                    petKind: petKind.specie,
                    service: service.name,
                    employee: { name: employee.name, id: employee.id },
                    path,
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getAll(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointments = yield AppointmentModel_1.default.find();
                res.json(appointments);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { petKindId, serviceId, employeeId, pathId } = req.body;
            const { id } = req.params;
            try {
                yield AppointmentModel_1.default.findOneAndUpdate({ id }, {
                    petKindId,
                    serviceId,
                    employeeId,
                    pathId,
                });
                res.send("Atualizado com sucesso");
            }
            catch (err) {
                next(err);
            }
        });
    }
    static deleteById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield AppointmentModel_1.default.findOneAndDelete({ id });
                res.send("deletado: " + id);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.AppointmentController = AppointmentController;
