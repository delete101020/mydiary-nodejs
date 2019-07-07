'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [
      {
        name: 'CTEC',
        address: '',
        website: '',
        director: '',
        type: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CTU',
        address: '',
        website: '',
        director: '',
        type: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
