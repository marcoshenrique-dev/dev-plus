import { Handler } from "aws-lambda";
import { ListUserController } from "../controllers";

const listUserController = new ListUserController();

export const handle: Handler = async (event) => {
  const result = await listUserController.handle(event);

  return result;
};