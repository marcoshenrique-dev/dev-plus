import { FindUserService } from "@users/infra/services";
import { Success } from "@utils/handleResponse";
import IParams from "@utils/types/params";


const findUserService = new FindUserService();
class FindUserController {

  async handle(event): Promise<IParams> {

  const {username} = event.headers;

  const result = await findUserService.execute(username);
  
   return Success({
     body: result
   });
}
}

export {FindUserController};