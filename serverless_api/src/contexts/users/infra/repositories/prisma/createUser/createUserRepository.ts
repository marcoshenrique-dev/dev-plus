
interface IRequest {
  username: string;
  name: string;
  email: string;
}

import {client} from '@database/client';
import IUser from '@users/core/entities/user';

class CreateUserRepository {

  async create({email, name, username} : IRequest): Promise<IUser> {

  const user = await client.user.create({
    data: {
      email,
      name,
      username
    }
  });

  return user;

  }
}

export {CreateUserRepository};