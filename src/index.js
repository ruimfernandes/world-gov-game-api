import config, { db, server as serverConfig } from "./config";
import server from "./server";
import { createDatabase } from "./database";

let serverInstance;

const database = createDatabase(db.adapter, config[db.adapter]);

database.on("connected", () => {
  serverInstance = server.start(serverConfig);
});

database.on("disconnected", () => {
  if (serverInstance) {
    serverInstance.close();
    serverInstance = null;
  }
});

database.connect();
