// imports
const express = require('express');

// initializing user router
const userRouter = express.Router();

// importing callbacks
const {authCallbacks} = require('./callbacks');

// adding callbacks to the route
userRouter.get('/', authCallbacks.getAllUsers);
userRouter.post('/register', authCallbacks.register);

module.exports = userRouter;
