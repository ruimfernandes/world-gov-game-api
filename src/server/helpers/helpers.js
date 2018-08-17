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
