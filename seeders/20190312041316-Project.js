'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        name: 'Project 1',
        desc: '',
        startDate: new Date(),
        endDate: new Date(),
        status: 1,
        estimatedTime: 1,
        totalSpentTime: 1,
        estimatedDura: 2,
        clientId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project 2',
        desc: '',
        startDate: new Date(),
        endDate: new Date(),
        status: 1,
        estimatedTime: 1,
        totalSpentTime: 1,
        estimatedDura: 2,
        clientId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project 3',
        desc: '',
        startDate: new Date(),
        endDate: new Date(),
        status: 1,
        estimatedTime: 1,
        totalSpentTime: 1,
        estimatedDura: 2,
        clientId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
