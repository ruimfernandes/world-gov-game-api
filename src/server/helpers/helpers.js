import errors from "./errors";

export function successResponse(response) {
  return function(body) {
    response.status(200).json(body);
  };
}

export function successEmptyResponse(response) {
  return function() {
    response.status(200).json({});
  };
}

export function failIfNotFound(message) {
  return function(obj) {
    if (!obj) throw errors.notFound(message);
    else return obj;
  };
}

export function failIfNotRemoved(message) {
  console.log("message ", message);

  return function(remove) {
    console.log("remove ", remove);
    if (remove.n === 0) throw errors.notFound(message);
  };
}
