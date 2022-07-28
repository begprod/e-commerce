const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;
const sequelize = require('./db');
const app = express();

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

startServer();
