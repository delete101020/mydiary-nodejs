'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tools', [
      {
        name: 'Visual Studio Code',
        desc: '',
        url: '',
        advantages: '',
        defects: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Postman',
        desc: '',
        url: '',
        advantages: '',
        defects: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wampserver',
        desc: '',
        url: '',
        advantages: '',
        defects: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tools', null, {});
  }
};
