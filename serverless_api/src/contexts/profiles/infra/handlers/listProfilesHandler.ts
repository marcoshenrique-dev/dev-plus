import ensureAuthenticated from "@middlewares/ensureAuthenticated";
import { badRequest } from "@utils/handleResponse";
import { Handler } from "aws-lambda";
import { ListProfilesController } from "../controllers";

const listPorfilesController = new ListProfilesController();

export const handle: Handler = async (event) => {

  const validate = await ensureAuthenticated({headers: event.headers});

  if(!validate.isAuthenticated){
   return badRequest({body: validate.message});
  }

  const result = await listPorfilesController.handle(event);

  return result;
};