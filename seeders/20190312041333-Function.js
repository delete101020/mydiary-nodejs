'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Functions', [
      {
        name: 'Function 1',
        estimatedTime: 10,
        logTime: 5,
        startDate: new Date(),
        endDate: new Date(),
        priority: 1,
        desc: '',
        status: 1,
        type: 1,
        projectId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Function 2',
        estimatedTime: 10,
        logTime: 5,
        startDate: new Date(),
        endDate: new Date(),
        priority: 1,
        desc: '',
        status: 1,
        type: 1,
        projectId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Function 3',
        estimatedTime: 10,
        logTime: 5,
        startDate: new Date(),
        endDate: new Date(),
        priority: 1,
        desc: '',
        status: 1,
        type: 1,
        projectId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Functions', null, {});
  }
};
