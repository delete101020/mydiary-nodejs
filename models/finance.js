'use strict';
module.exports = (sequelize, DataTypes) => {
  const Finance = sequelize.define('Finance', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    buy: DataTypes.BOOLEAN
  }, {});
  Finance.associate = function(models) {
    // associations can be defined here
  };
  return Finance;
};