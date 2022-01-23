import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsServices";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({
        chat,
        username,
      });

      return res.json({ settings });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { SettingsController };
