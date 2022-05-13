// imports
const express = require('express');

// Environment Variables Setup
require('dotenv').config({
  path: '.env',
  debug: false,
  encoding: false,
  override: true,
});
const {SERVER_PORT, SERVER_ROUTE} = process.env;

// importing middlewares
const {encryptPassword, tokenVerification, logging} = require('./middlewares');

// importing routes
const routes = require('./routes');

// import sequelize
const {sequelize} = require('./models');


(async () => {
  console.clear(); // clear console

  const server = express();

  // middlewares
  const middlewares = [encryptPassword, tokenVerification, logging];

  // sync sequelize
  try {
    await sequelize.sync({force: true});
    console.log(`Database connected successfully!`);
  } catch (e) {
    console.log(`Sequelize syncing error: ${e}`);
  }

  // JSON && URL-encoded parsing
  server.use(express.json());
  server.use(express.urlencoded({extended: true}));

  // routes
  await server.use(SERVER_ROUTE, middlewares, routes);

  // starting the server
  await server.listen(SERVER_PORT, () => {
    console.log('Server application started at port:' + SERVER_PORT);
  });
})();
