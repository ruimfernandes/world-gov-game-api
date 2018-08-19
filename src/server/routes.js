import Me from "./controllers/me";
import User from "./controllers/user";
import { Router } from "express";

export const initialize = () => {
  const api = Router();

  api.use("/me", Me);
  api.use("/user", User);

  return api;
};

export default {
  initialize
};
