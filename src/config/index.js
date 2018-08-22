export const server = {
  port: 3000
};

export const db = {
  adapter: 'mongo'
};

export const mongo = {
  url: 'mongodb://192.168.99.100:27017/world-gov-db',
  options: {
    useNewUrlParser: true,
    reconnectTries: 30,
    reconnectInterval: 500,
    promiseLibrary: global.Promise
  }
};

export default {
  db,
  server,
  mongo
};
