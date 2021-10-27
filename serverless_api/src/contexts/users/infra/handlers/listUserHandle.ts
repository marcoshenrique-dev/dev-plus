import { Handler } from "aws-lambda";

import { ListUserController } from "../controllers";
import ensureAuthenticated from "@middlewares/ensureAuthenticated";
import { badRequest } from "@utils/handleResponse";

const listUserController = new ListUserController();

export const handle: Handler = async (event) => {

  const validate = await ensureAuthenticated({headers: event.headers});

  if(!validate.isAuthenticated){
   return badRequest({body: validate.message});
  }

  const result = await listUserController.handle(event);

  return result;
};