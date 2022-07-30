const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 3000;
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

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
