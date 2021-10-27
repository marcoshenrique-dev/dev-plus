import { DeleteProfileRepository } from "@profiles/infra/repositories/prisma";
import IProfile from "@profiles/core/entities/profile";


const deleteProfileRepository = new DeleteProfileRepository();

class DeleteProfileService {

  async execute(id_profile: string): Promise<IProfile> {
  
    const result = deleteProfileRepository.delete(id_profile);
  
    return result;

  }
}

export {DeleteProfileService};