const Router = require('express').Router;
const router = new Router();
const deviceController = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.delete('/:id', checkRoleMiddleware('ADMIN'), deviceController.delete);

module.exports = router;
