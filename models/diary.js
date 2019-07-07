'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define('Diary', {
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  Diary.associate = function(models) {
    // associations can be defined here
  };
  return Diary;
};