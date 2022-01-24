import { Router } from "express";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const userController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);

export { routes };
