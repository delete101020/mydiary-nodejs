'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Music', [
      {
        name: 'Love song',
        url: '',
        type: 1,
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'We were in love',
        url: '',
        type: 2,
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'This love',
        url: '',
        type: 2,
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Music', null, {});
  }
};
