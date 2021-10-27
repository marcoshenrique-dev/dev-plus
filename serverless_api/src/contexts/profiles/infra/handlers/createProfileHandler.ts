import ensureAuthenticated from "@middlewares/ensureAuthenticated";
import { badRequest } from "@utils/handleResponse";
import { Handler } from "aws-lambda";
import { CreateProfileController } from "../controllers";

const createProfileController = new CreateProfileController();

export const handle: Handler = async (event) => {

  const validate = await ensureAuthenticated({headers: event.headers});

  if(!validate.isAuthenticated){
   return badRequest({body: validate.message});
  }

  const result = await createProfileController.handle(event);

  return result;
};