import { FindProfileService } from "@profiles/infra/services";
import { Success } from "@utils/handleResponse";
import IParams from "@utils/types/params";


const findProfileService = new FindProfileService();
class FindProfileController {

  async handle(event): Promise<IParams> {

  const {id_profile} = event.headers;

  const result = await findProfileService.execute(id_profile);
  
   return Success({
     body: result
   });
}
}

export {FindProfileController};