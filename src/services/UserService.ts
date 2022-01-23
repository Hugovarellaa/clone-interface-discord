import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
  async create(email: string) {
    const userRepository = await getCustomRepository(UsersRepository);

    //verificar se o usuario existir
    const userExists = await userRepository.findOne({
      email,
    });

    //Se existir, retorna o usuario
    if (userExists) {
      return userExists;
    }

    //se usuario nao existir, cria e salva no banco de dados
    const user = userRepository.create({
      email,
    });
    await userRepository.save(user);
    return user;
  }
}

export { UserService };
