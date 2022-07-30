const Router = require('express').Router;
const router = new Router();

router.post('/signup', );
router.post('/login', );
router.get('/auth', (req, res) => {
  res.json({ message: '/auth router' });
});

module.exports = router;
