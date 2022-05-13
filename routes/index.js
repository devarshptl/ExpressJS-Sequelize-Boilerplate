// imports
const express = require('express');

// created main router
const rootRouter = express.Router();

// routers
const userRouter = require('./user');

// adding routers to root router
rootRouter.use('/user', userRouter);


module.exports = rootRouter;
