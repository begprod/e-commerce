const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/userController');
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.checkAuth);
// cart
router.get('/cart/:userId', cartController.getCart);
router.post('/add-to-cart/:userId', cartController.addToCart);
router.delete('/delete-from-cart/:cartId', cartController.deleteFromCart);

module.exports = router;
