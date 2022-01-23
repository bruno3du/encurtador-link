import { redirectionController } from './../controllers/redirect.controller';
import { Router } from "express";

const redController = new redirectionController()
const redirectRoute = Router();

redirectRoute.get("/:hash", redController.get);

export default redirectRoute;