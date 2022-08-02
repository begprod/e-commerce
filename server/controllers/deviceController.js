const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const apiErrorHandler = require('../helpers/apiErrorHandler');

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, typeId, brandId, info } = req.body;
      const { img } = req.files;
      let fileName = `${uuid.v4()}.jpg`;

      await img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        typeId,
        brandId,
        img: fileName,
      });

      return res.json(device);
    } catch (err) {
      next(apiErrorHandler.badRequest(err.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    let devices;

    if (!brandId && !typeId) {
      devices = await Device.findAll();
    }

    if (brandId && !typeId) {
      devices = await Device.findAll({
        where: { brandId }
      });
    }

    if (!brandId && typeId) {
      devices = await Device.findAll({
        where: { typeId }
      });
    }

    if (brandId && typeId) {
      devices = await Device.findAll({
        where: { brandId, typeId }
      });
    }

    return res.json(devices);
  }

  async getOne(req, res) {

  }
}

module.exports = new DeviceController();
