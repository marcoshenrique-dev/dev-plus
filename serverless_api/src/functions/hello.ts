export const handle = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Hello world api",
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };
};