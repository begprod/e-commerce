class apiErrorsHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new apiErrorsHandler(400, message);
  }

  static internalServerError(message) {
    return new apiErrorsHandler(500, message);
  }

  static forbidden(message) {
    return new apiErrorsHandler(403, message);
  }

  static notFound(message) {
    return new apiErrorsHandler(404, message);
  }
}

module.exports = apiErrorsHandler;
