const errorHandler = (err, req, res, next) => {
  res.status(404).json({
    status: false,
    message: err.message,
    error: err,
  });
};

module.exports = errorHandler;
