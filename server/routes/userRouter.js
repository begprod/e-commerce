const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/auth', userController.checkAuth);

module.exports = router;
