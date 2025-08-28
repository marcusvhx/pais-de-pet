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
exports.PetKindController = void 0;
const ErrorWithStatus_1 = require("../utils/ErrorWithStatus");
const PetKindModel_1 = __importDefault(require("../models/PetKindModel"));
class PetKindController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { specie, kind } = req.body;
            try {
                const lastKind = yield PetKindModel_1.default.findOne().sort({ id: -1 });
                const id = lastKind ? lastKind.id + 1 : 1;
                const newKind = yield PetKindModel_1.default.create({ id, specie, kind });
                res.status(201).json(newKind);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { specie, kind } = req.body;
            const { id } = req.params;
            try {
                const editedKind = yield PetKindModel_1.default.updateOne({ id }, { specie, kind }, { new: true });
                res.status(200).json(editedKind);
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getAll(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const kinds = yield PetKindModel_1.default.find();
                res.json(kinds);
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
                const kind = yield PetKindModel_1.default.findOne({ id });
                if (!kind) {
                    throw new ErrorWithStatus_1.ErrorWithStatus("serviços não encontrado", 404);
                }
                res.json(kind);
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
                yield PetKindModel_1.default.findOneAndDelete({ id });
                res.status(204).json({ msg: "raça deletada" });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.PetKindController = PetKindController;
