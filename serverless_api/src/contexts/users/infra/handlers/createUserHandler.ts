import { Handler } from "aws-lambda";
import { CreateUserController } from "../controllers";

const createUserController = new CreateUserController();

export const handle: Handler = async (event) => {
  const result = await createUserController.handle(event);

  return result;
};