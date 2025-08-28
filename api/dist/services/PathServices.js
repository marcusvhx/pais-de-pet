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
exports.Path = void 0;
const PathModel_1 = __importDefault(require("../models/PathModel"));
const TicketModel_1 = __importDefault(require("../models/TicketModel"));
const ErrorWithStatus_1 = require("../utils/ErrorWithStatus");
class Path {
    static create(steps) {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = yield TicketModel_1.default.findOne();
            if (!ticket) {
                throw new ErrorWithStatus_1.ErrorWithStatus("ticket não existe", 400);
            }
            const path = yield PathModel_1.default.create({
                id: ticket.number,
                paused: false,
                currentPosition: 0,
                steps: steps,
            });
            return path;
        });
    }
    static nextStep(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = yield PathModel_1.default.findOneAndUpdate({ id }, { $inc: { currentPosition: 1 } }, { new: true });
            return path;
        });
    }
    static togglePause(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = yield PathModel_1.default.findOneAndUpdate({ id }, { $set: { paused: { $not: "$paused" } } }, { new: true });
            return { msg: "operação bem sucedida", paused: path === null || path === void 0 ? void 0 : path.paused };
        });
    }
}
exports.Path = Path;
