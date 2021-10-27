
import {client} from '@database/client';
import IProfile from '@profiles/core/entities/profile';

class DeleteProfileRepository {

  async delete(id: string): Promise<IProfile> {

  const profile = await client.profile.delete({
    where: {
      id
    }
  }
  );

  return profile;

  }
}

export {DeleteProfileRepository};