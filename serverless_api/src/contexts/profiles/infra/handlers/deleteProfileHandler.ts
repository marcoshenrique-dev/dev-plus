import ensureAuthenticated from "@middlewares/ensureAuthenticated";
import { badRequest } from "@utils/handleResponse";
import { Handler } from "aws-lambda";

import { DeleteProfileController } from "../controllers";

const deleteProfileCotroller = new DeleteProfileController();

export const handle: Handler = async (event) => {

  const validate = await ensureAuthenticated({headers: event.headers});

  if(!validate.isAuthenticated){
   return badRequest({body: validate.message});
  }

  const result = await deleteProfileCotroller.handle(event);

  return result;
};