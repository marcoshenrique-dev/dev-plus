import { CreateProfileService } from "@profiles/infra/services";
import { Success, badRequest } from "@utils/handleResponse";
import IParams from "@utils/types/params";

const createProfileService = new CreateProfileService();

class CreateProfileController {

  async handle(event): Promise<IParams> {
   const {name, iconUrl, userId} = JSON.parse(event.body);

   if(event.body === null) {
     return badRequest({body: "body is not defined"});
   }

   try {
    const result = await createProfileService.execute({
      name,
      iconUrl,
      userId
    });
 
    return Success({body: result});
 
   }
   catch {
    return badRequest({body: {
      message: 'algo deu errado ao criar o perfil'
    }});
   }

  }
}

export {CreateProfileController};