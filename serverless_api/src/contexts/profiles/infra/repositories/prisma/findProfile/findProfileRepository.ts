
import {client} from '@database/client';
import IProfile from '@profiles/core/entities/profile';

class FindProfileRepository {

  async find(id: string): Promise<IProfile> {

  const profile = await client.profile.findUnique({
    where: {
      id
    }
  }
  );

  return profile;

  }
}

export {FindProfileRepository};