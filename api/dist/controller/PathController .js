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
exports.PathController = void 0;
const ErrorWithStatus_1 = require("../utils/ErrorWithStatus");
const PathServices_1 = require("../services/PathServices");
const PathModel_1 = __importDefault(require("../models/PathModel"));
const StepModel_1 = __importDefault(require("../models/StepModel"));
class PathController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { steps } = req.body;
            try {
                const newPath = yield PathServices_1.Path.create(steps);
                res.status(201).json(newPath);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getSteps(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const steps = yield StepModel_1.default.find();
                res.json(steps);
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
                const path = yield PathModel_1.default.findOne({ id });
                if (!path) {
                    throw new ErrorWithStatus_1.ErrorWithStatus("Etapas não encontradas", 404);
                }
                res.json(path);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static nextStep(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield PathServices_1.Path.nextStep(Number(id));
                res.status(200).json({ msg: "etapa avançado" });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static pause(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield PathServices_1.Path.togglePause(Number(id));
                res.status(200).json({ msg: "pausado" });
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
                yield PathModel_1.default.findOneAndDelete({ id });
                res.json({ msg: "path deletado" });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.PathController = PathController;
