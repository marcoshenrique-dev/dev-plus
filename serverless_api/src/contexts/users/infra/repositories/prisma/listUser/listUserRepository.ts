
import {client} from '@database/client';
import IUser from '@users/core/entities/user';

class ListUserRepository {

  async find(username: string): Promise<IUser> {

  const user = await client.user.findUnique({
    where: {
      username
    }
  }
  );

  return user;

  }
}

export {ListUserRepository};