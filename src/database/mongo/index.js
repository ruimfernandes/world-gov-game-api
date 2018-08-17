import Q from "q";
import mongoose from "mongoose";

import { DbConnection } from "../db-connection";

export class MongoConnection extends DbConnection {
  constructor(url, options) {
    super("mongo", url, options);
  }

  init() {}

  connect() {
    const connectWithRetry = () => {
      console.log("MongoDB connection with retry");
      mongoose.Promise = Promise;
      mongoose
        .connect(
          this.url,
          this.options
        )
        .then(() => {
          console.log("MongoDB is connected");
        })
        .catch(err => {
          console.log(
            "MongoDB connection unsuccessful, retry after 1.5 seconds."
          );
          setTimeout(connectWithRetry, 1500);
        });
    };

    connectWithRetry();
  }

  disconnect() {
    mongoose.disconnect();
  }

  dropDatabase(cb) {
    mongoose.connection.db.dropDatabase(cb);
  }

  dropColection(collection, cb) {
    mongoose.connection.db.dropCollection(collection, cb);
  }

  close() {
    mongoose.connection.close(() => {
      this.logInfo("Connection closed on app termination");
    });
  }
}
