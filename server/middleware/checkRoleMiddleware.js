const jwt = require('jsonwebtoken');

module.exports = function (role) {
  return function (req, res, next) {
    if(req.method === 'OPTIONS') {
      next()
    }

    try {
      const token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(401).json({
          message: 'Необходима авторизация',
        });
      }

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

      if (decodedToken.role !== role) {
        return res.status(403).json({
          message: 'Недостаточно прав',
        });
      }

      req.user = decodedToken;

      next();
    } catch (err) {
      res.status(401).json({
        message: 'Пользователь не авторизован',
      });
    }
  };
}