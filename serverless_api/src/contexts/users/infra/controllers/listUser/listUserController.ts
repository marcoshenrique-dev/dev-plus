import { Success, badRequest } from "@utils/handleResponse";
import IParams from "@utils/types/params";

import ensureAuthenticated from "@middlewares/ensureAuthenticated";

class ListUserController {

  async handle(event): Promise<IParams> {


    console.log(event);

   const validate = await ensureAuthenticated({headers: event.headers});

   if(!validate.isAuthenticated){
    return badRequest({body: validate.message});
   }
  
   return Success({
     body: {
       'message': 'tudo ok'
     }
   });
}
}

export {ListUserController};