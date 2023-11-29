exports.handleError = function (error, req, res, next) {
  const statusCode = error.statusCode || 500;
  let message = error.message || "Internal Server Error";
  let stack = process.env.NODE_ENV === "development" ? error.stack : undefined;

  if (!(error instanceof Error)) {
    // If the error is not an instance of Error, create a new Error object
    const errorObject = new Error("Internal Server Error");
    message = errorObject.message;
    stack = process.env.NODE_ENV === "development" ? errorObject.stack : undefined;
  }

  res.status(statusCode).json({
    status: "error",
    message: message,
    stack: stack,
  });
};