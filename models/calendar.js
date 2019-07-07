'use strict';
module.exports = (sequelize, DataTypes) => {
  const Calendar = sequelize.define('Calendar', {
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    start: DataTypes.DATEONLY,
    end: DataTypes.DATEONLY,
    url: DataTypes.STRING,
    allDay: DataTypes.INTEGER
  }, {});
  Calendar.associate = function(models) {
    // associations can be defined here
  };
  return Calendar;
};