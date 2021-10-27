
import IProfile from "@profiles/core/entities/profile";

import { FindUserRepository } from "@users/infra/repositories/prisma";
import { ListProfilesRepository } from "@profiles/infra/repositories/prisma";

const listProfilesRepository = new ListProfilesRepository();
const findUserRepository = new FindUserRepository();

class ListProfilesService {

  async execute(username: string): Promise<IProfile[]> {

    const user = await findUserRepository.find(username);

    if(!user) {
      throw new Error('user not found');
    }
   
    const result = listProfilesRepository.list(user.id);
  
    return result;

  }
}

export {ListProfilesService};