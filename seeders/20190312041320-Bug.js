'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bugs', [
      {
        name: 'Bug 1',
        desc: '',
        debug: '',
        image: '',
        projectId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bug 2',
        desc: '',
        debug: '',
        image: '',
        projectId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bugs', null, {});
  }
};
