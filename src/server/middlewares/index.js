import express from "express";
import limitMiddleware from "./limit";
import skipMiddleware from "./skip";
import populateMiddleware from "./populate";

export const setGetMiddlewares = () => {
  const app = express();

  app.get(
    "*",
    addFilterToReq,
    limitMiddleware,
    skipMiddleware,
    populateMiddleware
  );

  return app;
};

function addFilterToReq(req, res, next) {
  req.filter = {};
  next();
}
