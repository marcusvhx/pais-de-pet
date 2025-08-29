import app from "./app";
import { createServer } from "http";

// aqui é o handler que a Vercel precisa
export default function handler(req: any, res: any) {
  const server = createServer((req_, res_) => app(req_, res_));
  server.emit("request", req, res);
}
