import IUser from "@users/core/entities/user";
import { CreateUserRepository } from "@users/infra/repositories/prisma";

interface IRequest {
  username: string;
  name: string;
  email: string;
}

const createUserRepository = new CreateUserRepository();

class CreateUserService {

  async execute({email, name, username} : IRequest): Promise<IUser> {

  // create user
  
    const result = createUserRepository.create({
      name, email, username
    });
  
    return result;

  }
}

export {CreateUserService};