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
    let cart = await Cart.findOne({
      where: { userId }
    });

    if (cart === null) {
      cart = await Cart.create({ userId });
    }

    const cartDevice = await CartDevice.create({ deviceId, cartId: cart.id });

    return res.json(cartDevice);
  };

  async deleteFromCart(req, res) {
    const { cartId, deviceId } = req.body;
    console.log(cartId, deviceId);
    const cartDevice = await CartDevice.findOne({
      where: { cartId, deviceId }
    });

    await cartDevice.destroy();

    return res.json(cartDevice);
  }
}

module.exports = new CartController();
