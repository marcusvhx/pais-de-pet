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
exports.createAppointmentId = createAppointmentId;
const TicketModel_1 = __importDefault(require("../models/TicketModel"));
const ErrorWithStatus_1 = require("../utils/ErrorWithStatus");
function createAppointmentId(petKindId) {
    return __awaiter(this, void 0, void 0, function* () {
        const suffix = yield TicketModel_1.default.findOne();
        if (!suffix) {
            throw new ErrorWithStatus_1.ErrorWithStatus("Não há tickets", 500);
        }
        const prefix = petKindId == 1 ? "G" : "C";
        return prefix + String(suffix.number).padStart(3, "0");
    });
}
