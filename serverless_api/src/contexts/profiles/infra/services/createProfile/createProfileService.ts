import { CreateProfileRepository } from "@profiles/infra/repositories/prisma";
import IProfile from "@profiles/core/entities/profile";

interface IRequest {
  name: string;
  iconUrl: string;
  userId: string;
}

const createProfileRepository = new CreateProfileRepository();

class CreateProfileService {

  async execute({name, iconUrl, userId} : IRequest): Promise<IProfile> {
  
    const result = createProfileRepository.create({
      name, iconUrl, userId
    });
  
    return result;

  }
}

export {CreateProfileService};