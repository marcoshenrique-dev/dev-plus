
import {client} from '@database/client';
import IProfile from '@profiles/core/entities/profile';

class ListProfilesRepository {

  async list(id: string): Promise<IProfile[]> {

  const profile = await client.profile.findMany({
    where: {
      userId: id
    }
  });

  return profile;

  }
}

export {ListProfilesRepository};