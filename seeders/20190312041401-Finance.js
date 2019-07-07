'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Finances', [
      {
        title: 'USD',
        price: 23000,
        desc: '',
        buy: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'VND',
        price: 1,
        desc: '',
        buy: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Won',
        price: 10000,
        desc: '',
        buy: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Finances', null, {});
  }
};
