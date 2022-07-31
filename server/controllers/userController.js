const apiErrorHandler = require('../helpers/apiErrorHandler');

class UserController {
  async signup(req, res) {

  }

  async login(req, res) {

  }

  async checkAuth(req, res, next) {
    const { id } = req.query;

    if (!id) {
      return next(apiErrorHandler.badRequest('Не передан id пользователя'));
    }

    res.json({
      userId: id
    });
  }
}

module.exports = new UserController();
