export const server = {
  port: 3000
};

export const db = {
  adapter: 'mongo'
};

export const mongo = {
  url: 'mongodb://mongo:27017/world-gov-db',
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
