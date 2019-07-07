'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tool = sequelize.define('Tool', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    url: DataTypes.STRING,
    advantages: DataTypes.TEXT,
    defects: DataTypes.TEXT
  }, {});
  Tool.associate = function(models) {
    // associations can be defined here
  };
  return Tool;
};