require('dotenv').config();
const express = require('express');
const consign = require('consign');

const database = require('./config/database');

const app = express();

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.database = database;

app.listen(3000, () => {
  console.log('Api iniciada');
});
