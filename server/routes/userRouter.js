const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.checkAuth);

module.exports = router;
