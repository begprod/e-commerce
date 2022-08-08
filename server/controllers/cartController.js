const { Cart, CartDevice} = require('../models/models');
const apiErrorHandler = require('../helpers/apiErrorHandler');

class CartController {
  async getCart(req, res) {
    const { userId } = req.params;
    const cart = await Cart.findOne({
      where: { userId }
    });
    const cartDevices = await CartDevice.findAll({ where: { cartId: cart.id } });

    return res.json(cartDevices);
  }

  async addToCart(req, res) {
    const { userId } = req.params;
    const { deviceId } = req.body;
    const cart = await Cart.findOne({
      where: { userId }
    });
    const cartDevice = await CartDevice.create({ deviceId, cartId: cart.id });

    return res.json(cartDevice);
  };

  async deleteFromCart(req, res) {
    const { cartId } = req.params;
    const cartDevice = await CartDevice.findOne({
      where: { cartId }
    });
    await cartDevice.destroy();

    return res.json(cartDevice);
  }
}

module.exports = new CartController();
