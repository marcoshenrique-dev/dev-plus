import IParams from "@utils/types/params";

export function InternalServerError({statusCode = 500, body = ""}: IParams) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
