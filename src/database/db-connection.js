import { EventEmitter } from "events";

const firstUpper = word => {
  if (word && word.length) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
};

export class DbConnection extends EventEmitter {
  constructor(adapter, url, options) {
    super();
    this.adapter = firstUpper(adapter) || "";
    this.url = url;
    this.options = options || {};
    this.timer;
    this.sleepTime = 5000;
    this.init();
  }

  init() {}

  connect() {
    throw new Error("Connect db not implemented");
  }

  disconnect() {
    throw new Error("Disconnect db not implemented");
  }

  dropDatabase() {
    throw new Error("Drop database is not implemented");
  }

  dropCollection() {
    throw new Error("Drop collecttion is not implemented");
  }

  retryConnect() {
    console.log("retryConnect log");
    this.timer = setTimeout(this.connect.bind(this), this.sleepTime);
  }

  onOpen() {
    if (this.timer) {
      console.log("onOpen log");
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  onError(err) {
    console.log("onError log: ", err);
    this.disconnect();
  }

  onConnected() {
    this.emit("connected");
  }

  onDisconnected() {
    console.log("disconnected log");
    this.emit("disconnected");
    this.retryConnect();
  }
}
