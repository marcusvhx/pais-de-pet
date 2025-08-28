"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// esse model não tem relação com outros models, é apenas para fornecimento de
// dados para o front-end, o back-end não fará nenhum processo com ele =)
const StepSchema = new mongoose_1.default.Schema({
    name: String
});
exports.default = mongoose_1.default.model("StepModel", StepSchema);
