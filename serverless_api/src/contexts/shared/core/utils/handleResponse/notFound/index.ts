import IParams from "@utils/types/params";

export function NotFound({statusCode = 404, body = ""}: IParams) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
