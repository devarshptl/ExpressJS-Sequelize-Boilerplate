'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        uname: 'User One',
        email: 'userone@sample.com',
        pwd: 'sample1234',
      },
      {
        uname: 'User Two',
        email: 'usertwo@sample.com',
        pwd: 'sample1234',
      },
    ], {}, ['uname', 'email', 'pwd']);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
