export const DEFAULT = 10;
export const MAXIMUM = 100;

export default (req, res, next) => {
  const { limit } = req.query;
  let parsedlimit = parseInt(limit);

  if (isNaN(parsedlimit) || parsedlimit <= 0) {
    parsedlimit = DEFAULT;
  }

  if (parsedlimit > MAXIMUM) {
    parsedlimit = MAXIMUM;
  }

  req.filter.limit = parsedlimit;
  next();
};
