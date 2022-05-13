const {hashSync, genSaltSync} = require('bcrypt');

// environment variables
const {SALT} = process.env;

// generate salt
const salt = genSaltSync(parseInt(SALT));

module.exports = {
  encryptPassword: async (req, res, next) => {
    const {pwd} = req.body;
    if (pwd) {
      req.body.pwd = hashSync(pwd, salt);
    }
    next();
  },
  tokenVerification: async (req, res, next) => {
    next();
  },
  logging: async (req, res, next) => {
    next();
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
  },
};
