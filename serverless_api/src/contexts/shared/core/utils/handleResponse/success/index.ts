export function Success({statusCode = 200, body = ""}) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }
}
