'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Diaries', [
      {
        title: 'Yesterday',
        desc: '',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Today',
        desc: '',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Tomorrow',
        desc: '',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Diaries', null, {});
  }
};
