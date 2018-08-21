export default (req, res, next) => {
  const { populate } = req.query;

  if (!populate) {
    req.filter.populate = "";
  } else {
    req.filter.populate = populate.split(",").map(field => field, {});
  }

  next();
};
