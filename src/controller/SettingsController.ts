import { Request, Response } from "express";
import { SettingServices } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsService = new SettingServices();
    const settings = await settingsService.create({ chat, username });

    return res.json(settings);
  }
}

export { SettingsController };
