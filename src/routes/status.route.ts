import { Response, Request, Router, response } from "express";

const status = Router();

status.get("/status", (req: Request, res: Response) => {
  return res.status(200).json({ message: "ok" });
});

export default status;
