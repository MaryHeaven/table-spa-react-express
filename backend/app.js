const express = require('express');
const config = require('./config/config');
const { sequelize } = require('./db/models/index');
const tableRouter = require('./routes/table.routes');

const app = express();
config(app);
const PORT = process.env.PORT ?? 4002;

// routes use
app.use('/api', tableRouter);

app.listen(PORT, async () => {
  console.log(`S E R V E R S T A R T E D A T ${PORT} P O R T`);
  try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
});
