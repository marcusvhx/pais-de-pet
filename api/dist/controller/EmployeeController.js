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
exports.EmployeeController = void 0;
const ErrorWithStatus_1 = require("../utils/ErrorWithStatus");
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
class EmployeeController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, profession } = req.body;
            try {
                const lastEmployee = yield EmployeeModel_1.default.findOne().sort({ id: -1 });
                const id = lastEmployee ? lastEmployee.id + 1 : 1;
                console.log(id);
                yield EmployeeModel_1.default.create({ id, name, profession });
                res.status(201).json({ msg: "funcionário adicionado" });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getAll(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield EmployeeModel_1.default.find();
                res.json(employees);
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
                const employee = yield EmployeeModel_1.default.findOne({ id });
                if (!employee) {
                    throw new ErrorWithStatus_1.ErrorWithStatus("Funcionário não encontrado", 404);
                }
                res.json(employee);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, profession } = req.body;
            try {
                const newEmployee = yield EmployeeModel_1.default.findOneAndUpdate({ id }, { name, profession }, { new: true });
                res.json(newEmployee);
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
                yield EmployeeModel_1.default.findOneAndDelete({ id });
                res.json({ msg: "funcionário deletado" });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.EmployeeController = EmployeeController;
