import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UsersServices {
  async create(email: string) {
    const usersRepository = getCustomRepository(UserRepository);

    // verfica se o usuario existir
    const userExists = await usersRepository.findOne({
      email,
    });

    // se existir, retorna o usuario
    if (userExists) {
      return userExists;
    }

    // Se nao existir, salvar no banco de dados
    const user = usersRepository.create({
      email,
    });
    await usersRepository.save(user);
    return user;
  }
}

export { UsersServices };
