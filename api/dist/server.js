"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("./db/connection");
const envParser_1 = require("./utils/envParser");
const initDB_1 = require("./db/initDB");
const ErrorWithStatus_1 = require("./utils/ErrorWithStatus");
const routes_1 = require("./routes");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const PORT = process.env.PORT;
// middlewares
exports.app.use(express_1.default.json()); // parse pra JSON
exports.app.use(
// cors do front
(0, cors_1.default)({
    origin: (0, envParser_1.parser)(process.env.CORS_ORIGIN || ""),
}));
(0, routes_1.setupRoutes)(exports.app); // configura as rotas
exports.app.use((err, req, res, next) => {
    // middleware de error
    if (err instanceof ErrorWithStatus_1.ErrorWithStatus) {
        res.status(err.statusCode).send(err.message);
        return;
    }
    res.status(500).send("Erro interno do servidor");
});
(0, connection_1.connectDB)(); // conecta a api ao mongo
(0, initDB_1.initDB)(); // verifica se o db ta certo
exports.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
