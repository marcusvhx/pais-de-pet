import { Router } from "express";

const hello = Router();

hello.get("/",(req,res)=>res.send("hello world"))

export {hello}