'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'User 1',
        email: 'delete101020@live.com',
        password: '746997643z!',
        phone: '01219595357',
        gender: 0,
        birthday: '1993-02-17',
        address: 'Can Tho',
        avatar: '',
        advantages: '',
        defects: '',
        hobbies: '',
        marital: 0,
        urlFB: 'facebook.com/duong.kingfisher',
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User 2',
        email: 'userb@zing.vn',
        password: 'password',
        phone: '0934934226',
        gender: 1,
        birthday: '1994-01-01',
        address: '',
        avatar: '',
        advantages: '',
        defects: '',
        hobbies: '',
        marital: 1,
        urlFB: '',
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User 3',
        email: 'user3@yahoo.com.vn',
        password: 'kiki',
        phone: '',
        gender: 1,
        birthday: '1994-01-01',
        address: '',
        avatar: '',
        advantages: '',
        defects: '',
        hobbies: '',
        marital: 1,
        urlFB: '',
        groupId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
