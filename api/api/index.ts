import { createServer } from "http";
import app from "../src/server";
export default (req: any, res: any) => {
  const server = createServer((req_, res_) => app(req_, res_));
  server.emit("request", req, res);
};
