const apiErrorHandler = require('../helpers/apiErrorHandler');

module.exports = function(err, req, res, next) {
  if (err instanceof apiErrorHandler) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: 'Неизвестная ошибка',
  });
}
