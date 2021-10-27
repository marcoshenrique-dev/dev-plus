import IUser from "@users/core/entities/user";
import { ListUserRepository } from "@users/infra/repositories/prisma";

const listUserRepository = new ListUserRepository();

class ListUserService {

  async execute(username: string): Promise<IUser> {
  
    const result = listUserRepository.find(username);
  
    return result;

  }
}

export {ListUserService};