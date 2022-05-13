const _ = require('lodash');

// import db models
const {User} = require('../../../models');

// import utilities
const {responseHandler} = require('../../../utils');

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.findAll({});
    responseHandler(res, users);
  },
  register: async (req, res) => {
    const user = await User.build(req.body);
    await user.save();
    responseHandler(res, user);
  },
};
