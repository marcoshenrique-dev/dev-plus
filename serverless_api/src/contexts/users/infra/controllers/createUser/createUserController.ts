import { CreateUserService } from "@users/infra/services";
import { Success, badRequest } from "@utils/handleResponse";
import IParams from "@utils/types/params";

const createUserService = new CreateUserService();

class CreateUserController {

  async handle(event): Promise<IParams> {
   const {name, username,email} = JSON.parse(event.body);

   if(event.body === null) {
     return badRequest({body: "body is not defined"});
   }

   try {
    const result = await createUserService.execute({
      name,
      email,
      username
    });
 
    return Success({body: result});
 
   }
   catch {
    return badRequest({body: {
      message: 'algo deu errado ao criar o usuário'
    }});
   }

  }
}

export {CreateUserController};