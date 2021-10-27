import { FindProfileRepository } from "@profiles/infra/repositories/prisma";

import IProfile from "@profiles/core/entities/profile";

const findProfileRepository = new FindProfileRepository();

class FindProfileService {

  async execute(id: string): Promise<IProfile> {

  
    const result = findProfileRepository.find(id);
  
    return result;

  }
}

export {FindProfileService};