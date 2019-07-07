'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Files', [
      {
        name: 'File 1',
        type: 1,
        projectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'File 2',
        type: 1,
        projectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'File 3',
        type: 1,
        projectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Files', null, {});
  }
};
