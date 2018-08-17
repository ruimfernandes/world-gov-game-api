function defaultHandler(err, req, res, next) {
  const status = err.status || 500,
    message = err.message || "Server error.";
  res.status(status).json({ error: message });
}

function defaultNotFound(req, res, next) {
  next(notFound());
}

function nextErr(next) {
  return function(err) {
    err.status = err.status || 500;
    next(err);
  };
}

function notFound(message) {
  return buildError(404, message || "Not found.");
}

function unauthorized(message) {
  return buildError(401, message || "Unauthorized.");
}

function forbidden(message) {
  return buildError(403, message || "Forbidden.");
}

function badRequest(message) {
  return buildError(400, message || "Bad request.");
}

function unprocessableEntity(message) {
  return buildError(422, message || "Unprocessable entity.");
}

function throwUnprocessableEntity(message) {
  return function(err) {
    err.status = 422;
    err.message = `${message}: ${err.message}`;
    throw err;
  };
}

function buildError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

export default {
  nextErr,
  notFound,
  unauthorized,
  forbidden,
  badRequest,
  unprocessableEntity,
  throwUnprocessableEntity,
  middleware: {
    notFound: defaultNotFound,
    default: defaultHandler
  }
};
