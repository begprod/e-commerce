class UserController {
  async signup(req, res) {

  }

  async login(req, res) {

  }

  async checkAuth(req, res) {
    res.json('checkAuth');
  }
}

module.exports = new UserController();
