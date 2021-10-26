export function NotFound({statusCode = 404, body = ""}) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
