import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class UsersServices {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    // verfica se o usuario existir
    const userExists = await this.usersRepository.findOne({
      email,
    });

    // se existir, retorna o usuario
    if (userExists) {
      return userExists;
    }

    // Se nao existir, salvar no banco de dados
    const user = this.usersRepository.create({
      email,
    });
    await this.usersRepository.save(user);
    return user;
  }
}

export { UsersServices };
