import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const settingsController = new SettingsController();
const userController = new UsersController();

const routes = Router();

routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);

export { routes };
