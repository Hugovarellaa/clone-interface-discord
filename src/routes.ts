import { Router } from "express";
import { SettingsController } from "./controller/SettingsController";

const routes = Router();

const settingsRepository = new SettingsController();

routes.post("/settings", settingsRepository.create);

export { routes };
