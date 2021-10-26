import IParams from "@utils/types/params";

export function Success({statusCode = 200, body = ""} : IParams) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
