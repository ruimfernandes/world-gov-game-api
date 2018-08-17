import http from "http";

export function createServer(app, port) {
  const server = http.createServer(app);

  server.listen(port);
  //server.on("error", onError.bind(null, port));
  //server.on("listening", onListening.bind(null, server));
  return server;
}
