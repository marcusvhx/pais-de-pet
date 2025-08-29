import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connection";
import { parser } from "./utils/envParser";
import { initDB } from "./db/initDB";
import { ErrorWithStatus } from "./utils/ErrorWithStatus";
import setupRoutes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json()); // parse pra JSON
app.use(
  // cors do front
  cors({
    origin: parser(process.env.CORS_ORIGIN || ""),
  })
);

setupRoutes(app); // configura as rotas


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // middleware de error
  if (err instanceof ErrorWithStatus) {
    res.status(err.statusCode).send(err.message);
    return;
  }
  res.status(500).send("Erro interno do servidor");
});

connectDB(); // conecta a api ao mongo
initDB(); // verifica se o db ta certo


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;