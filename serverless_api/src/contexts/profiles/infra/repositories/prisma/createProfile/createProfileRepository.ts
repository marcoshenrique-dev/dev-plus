
interface IRequest {
  name: string;
  iconUrl: string;
  userId: string;
}

import {client} from '@database/client';
import IProfile from '@profiles/core/entities/profile';

class CreateProfileRepository {

  async create({iconUrl, name, userId} : IRequest): Promise<IProfile> {

  const profile = await client.profile.create({
    data: {
     iconUrl,
     name,
     userId
    }
  });

  return profile;

  }
}

export {CreateProfileRepository};