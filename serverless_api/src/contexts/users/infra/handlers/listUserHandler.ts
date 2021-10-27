import { Handler } from "aws-lambda";

import { FindUserController } from "../controllers";
import ensureAuthenticated from "@middlewares/ensureAuthenticated";
import { badRequest } from "@utils/handleResponse";

const findUserController = new FindUserController();

export const handle: Handler = async (event) => {

  const validate = await ensureAuthenticated({headers: event.headers});

  if(!validate.isAuthenticated){
   return badRequest({body: validate.message});
  }

  const result = await findUserController.handle(event);

  return result;
};