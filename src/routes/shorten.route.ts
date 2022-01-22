import { Router } from "express";
import { ShortenController } from "../controllers/shorten.controller";

const shortenController = new ShortenController();
const shortenRoute = Router();

shortenRoute.post("/shorten", shortenController.create);

export default shortenRoute;
