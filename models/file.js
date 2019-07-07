'use strict';
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    name: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {});
  File.associate = function(models) {
    File.belongsTo(models.Project, {
      foreignKey: 'projectId',
      onDelete: 'CASCADE'
    });
  };
  return File;
};