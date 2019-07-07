'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reports', [
      {
        title: 'Report 1',
        desc: '',
        projectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Report 2',
        desc: '',
        projectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Report 2',
        desc: '',
        projectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reports', null, {});
  }
};
