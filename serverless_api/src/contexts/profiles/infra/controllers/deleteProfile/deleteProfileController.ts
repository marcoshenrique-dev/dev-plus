import { DeleteProfileService } from "@profiles/infra/services";

import { Success } from "@utils/handleResponse";
import IParams from "@utils/types/params";


const deleteProfileService = new DeleteProfileService();
class DeleteProfileController {

  async handle(event): Promise<IParams> {

  const {id_profile} = event.headers;

  const result = await deleteProfileService.execute(id_profile);
  
   return Success({
     body: result
   });
}
}

export {DeleteProfileController};