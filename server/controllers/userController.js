const apiErrorHandler = require('../helpers/apiErrorHandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Cart } = require('../models/models');

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '24h' });
};

class UserController {
  async signup(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(apiErrorHandler.badRequest('Некорректный email или пароль'));
    }

    const applicant = await User.findOne({
      where: { email }
    });

    if (applicant) {
      return next(apiErrorHandler.badRequest('Пользователь с таким email уже существует'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      password: hashPassword,
      role,
    });
    const cart = await Cart.create({
      userId: user.id
    });
    const token = generateToken(user.id, user.email, user.role);

    return res.json({
      token,
    });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      return next(apiErrorHandler.badRequest('Пользователь с таким email не найден'));
    }

    let checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return next(apiErrorHandler.badRequest('Неверный пароль'));
    }

    const token = generateToken(user.id, user.email, user.role);

    return res.json({
      token,
    });
  }

  async checkAuth(req, res, next) {
    const token = generateToken(req.user.id, req.user.email, req.user.role);

    return res.json({
      token
    });
  }
}

module.exports = new UserController();
