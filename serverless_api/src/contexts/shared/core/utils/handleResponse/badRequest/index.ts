import IParams from "@utils/types/params";

export function badRequest({statusCode = 400, body = ""}: IParams) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
