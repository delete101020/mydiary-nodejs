'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        name: 'Administrator',
        role: 'account.create,account.list,account.detail,account.edit,account.delete,bug.create,bug.list,bug.detail,bug.edit,bug.delete,calendar.create,calendar.list,calendar.detail,calendar.edit,calendar.delete,client.create,client.list,client.detail,client.edit,client.delete,diary.create,diary.list,diary.detail,diary.edit,diary.delete,file.create,file.list,file.detail,file.edit,file.delete,finance.create,finance.list,finance.detail,finance.edit,finance.delete,framework.create,framework.list,framework.detail,framework.edit,framework.delete,group.create,group.list,group.detail,group.edit,group.delete,function.create,function.list,function.detail,function.edit,function.delete,group.create,group.list,group.detail,group.edit,group.delete,job.create,job.list,job.detail,job.edit,job.delete,music.create,music.list,music.detail,music.edit,music.delete,project.create,project.list,project.detail,project.edit,project.delete,report.create,report.list,report.detail,report.edit,report.delete,skill.create,skill.list,skill.detail,skill.edit,skill.delete,tool.create,tool.list,tool.detail,tool.edit,tool.delete,upload.single,upload.multi,user.create,user.list,user.detail,user.edit,user.delete,video.create,video.list,video.detail,video.edit,video.delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Member',
        role: 'account.list,account.detail,bug.list,bug.detail,calendar.list,calendar.detail,diary.list,diary.detail,file.list,file.detail,finance.list,finance.detail,framework.list,framework.detail,function.list,function.detail,group.list,group.detail,job.list,job.detail,music.list,music.detail,project.list,project.detail,report.list,report.detail,skill.list,skill.detail,tool.list,tool.detail,user.list,user.detail,video.list,video.detail',
        createdAt: new Date(),
        updatedAt: new Date()
      },
	  {
        name: 'Guess',
        role: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
