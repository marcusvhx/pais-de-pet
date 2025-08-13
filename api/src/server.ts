import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connection";
import { parser } from "./utils/envParser";
import { initDB } from "./db/initDB";
import { ErrorWithStatus } from "./utils/ErrorWithStatus";
import { setupRoutes } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json()); // parse pra JSON
app.use(
  cors({
    origin: parser(process.env.CORS_ORIGIN || ""),
  })
);

connectDB(); // conecta a api ao mongo
initDB();

setupRoutes(app);

app.use((err: ErrorWithStatus | Error, req: Request, res: Response) => {
  if (err instanceof ErrorWithStatus) {
    res.status(err.statusCode).send(err.message);
    return;
  }
  res.status(500).send("Erro interno do servidor");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
