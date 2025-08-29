import { NextFunction, Request, Response, Router } from "express";

const hello = Router();

hello.get("", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello world");
});

export { hello };
