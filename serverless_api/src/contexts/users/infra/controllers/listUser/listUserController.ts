import { ListUserService } from "@users/infra/services";
import { Success } from "@utils/handleResponse";
import IParams from "@utils/types/params";


const listUserService = new ListUserService();
class ListUserController {

  async handle(event): Promise<IParams> {

  const {username} = event.headers;

  const result = await listUserService.execute(username);
  
   return Success({
     body: result
   });
}
}

export {ListUserController};