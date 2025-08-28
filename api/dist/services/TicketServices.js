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
exports.Ticket = void 0;
const TicketModel_1 = __importDefault(require("../models/TicketModel"));
class Ticket {
    static getTicket() {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = yield TicketModel_1.default.findOne();
            if (!ticket)
                throw new Error("Ticket não encontrado");
            return ticket.number;
        });
    }
    static updateTicket() {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = yield TicketModel_1.default.findOneAndUpdate({}, { $inc: { number: 1 } }, { new: true });
            return ticket === null || ticket === void 0 ? void 0 : ticket.number;
        });
    }
    static resetTickets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield TicketModel_1.default.findOneAndUpdate({}, { $set: { number: 0 } });
            return { msg: "ticket resetado" };
        });
    }
}
exports.Ticket = Ticket;
