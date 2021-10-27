import { ListProfilesService } from "@profiles/infra/services";
import { Success } from "@utils/handleResponse";
import IParams from "@utils/types/params";


const listProfilesService = new ListProfilesService();
class ListProfilesController {

  async handle(event): Promise<IParams> {

  const {username} = event.headers;

  const result = await listProfilesService.execute(username);
  
   return Success({
     body: result
   });
}
}

export {ListProfilesController};