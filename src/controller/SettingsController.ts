import { Request, Response } from "express";
import { SettingServices } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    try {
      const settingsService = new SettingServices();
      const settings = await settingsService.create({ chat, username });

      return res.json(settings);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { SettingsController };
