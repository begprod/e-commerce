class UserController {
  async signup(req, res) {

  }

  async login(req, res) {

  }

  async checkAuth(req, res) {
    const query = req.query;
    res.json(query);
  }
}

module.exports = new UserController();
