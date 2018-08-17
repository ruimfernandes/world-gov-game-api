import Me from "./controllers/me";
//import Users from "./controllers/users";
import { Router } from "express";

export const initialize = () => {
  const api = Router();

  api.use("/me", Me);
  //api.use("/users", Users);

  return api;
};

export default {
  initialize
};
