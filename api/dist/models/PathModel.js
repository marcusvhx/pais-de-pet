"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PathSchema = new mongoose_1.default.Schema({
    id: { type: Number, required: true },
    paused: { type: Boolean, required: true },
    currentPosition: { type: Number, required: true },
    steps: { type: [String], required: true },
});
exports.default = mongoose_1.default.model("PathModel", PathSchema);
