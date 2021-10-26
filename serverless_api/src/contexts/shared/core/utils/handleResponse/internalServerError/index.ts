export function InternalServerError({statusCode = 500, body = ""}) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
