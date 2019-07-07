'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Frameworks', [
      {
        name: 'Express',
        summary: '',
        desc: '',
        researchDate: new Date(),
        url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angular',
        summary: '',
        desc: '',
        researchDate: new Date(),
        url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
        summary: '',
        desc: '',
        researchDate: new Date(),
        url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Frameworks', null, {});
  }
};
