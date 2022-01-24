import { Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";

class UsersController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const userService = new UsersServices();

    const user = await userService.create(email);

    return res.json(user);
  }
}

export { UsersController };
