const Router = require('express').Router;
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;
