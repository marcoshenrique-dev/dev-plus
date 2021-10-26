import { Handler } from "aws-lambda";
import { TesteController } from "../controllers";

import {Success} from '@utils/handleResponse';

const testeController = new TesteController();

export const handle: Handler = async (event) => {
  const result = await testeController.handle(event);

  return Success({body: result});
};