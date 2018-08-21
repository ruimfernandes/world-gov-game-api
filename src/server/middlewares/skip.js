const DEFAULT = 0;

export default (req, res, next) => {
  const { skip } = req.query;
  let parsedSkip = parseInt(skip);

  if (isNaN(parsedSkip) || parsedSkip <= 0) {
    parsedSkip = DEFAULT;
  }

  req.filter.skip = parsedSkip;
  next();
};
