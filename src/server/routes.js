import { Router } from "express";
import Me from "./controllers/me";
import User from "./controllers/user";
import * as middlewares from "./middlewares";

export const initialize = () => {
  const api = Router();

  api.use(middlewares.setGetMiddlewares());
  api.use("/me", Me);
  api.use("/user", User);

  return api;
};

export default {
  initialize
};
