'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Calendars', [
      {
        title: 'January',
        desc: '',
        start: new Date(),
        end: new Date(),
        url: '',
        allDay: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'February',
        desc: '',
        start: new Date(),
        end: new Date(),
        url: '',
        allDay: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'March',
        desc: '',
        start: new Date(),
        end: new Date(),
        url: '',
        allDay: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Calendars', null, {});
  }
};
