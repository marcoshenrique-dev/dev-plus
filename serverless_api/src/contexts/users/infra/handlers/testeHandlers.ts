import { Handler } from "aws-lambda";
import { TesteController } from "../controllers";

const testeController = new TesteController();

export const handle: Handler = async (event) => {
  const result = await testeController.handle(event);

  return {
    statusCode: 201,
    body: JSON.stringify(result),
    headers: {
      "Content-Type": "application/json"
    }
  }
  
};