"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PetKindSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    specie: { type: String, required: true },
    kind: { type: String, required: true },
});
exports.default = mongoose_1.default.model("PetKind", PetKindSchema);
