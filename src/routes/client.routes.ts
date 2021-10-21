import { Router } from "express";
import { ClientController } from "../controllers";
import { validationSchema } from "../middlewares";
import { ClientSchema } from "../schemas";
const clientRouter = Router();

clientRouter.post(
  "/",
  validationSchema(ClientSchema.clientSchema),
  ClientController.createClient
);

clientRouter.get("/", ClientController.getAllClients);

clientRouter.get("/average", ClientController.getAveragedClients);

export default clientRouter;
