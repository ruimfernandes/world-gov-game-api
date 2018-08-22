import bodyParser from 'body-parser';
import express from 'express';
import methodOverride from 'method-override';
import morgan from 'morgan';
import { createServer } from './server';
import errors from './helpers/errors';
import routes from './routes';

export function start(config) {
  const { port } = config;

  const app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride());
  app.disable('x-powered-by');
  app.use(routes.initialize());
  app.use(errors.middleware.notFound);
  app.use(errors.middleware.default);

  return createServer(app, port);
}

export default {
  start
};
