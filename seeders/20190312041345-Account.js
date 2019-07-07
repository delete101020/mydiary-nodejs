'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accounts', [
      {
        username: 'delete101020',
        password: 'xxxxxxxxxx',
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'duongkingfisher',
        password: 'xxxxxxxxxx',
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: '01219595357',
        password: 'xxxxxxxxxx',
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
