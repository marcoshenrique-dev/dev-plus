import IUser from "@users/core/entities/user";
import { FindUserRepository } from "@users/infra/repositories/prisma";

const findUserRepository = new FindUserRepository();

class FindUserService {

  async execute(username: string): Promise<IUser> {
  
    const result = findUserRepository.find(username);
  
    return result;

  }
}

export {FindUserService};