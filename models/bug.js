'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bug = sequelize.define('Bug', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    debug: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Bug.associate = function(models) {
    Bug.belongsTo(models.Project, {
      foreignKey: 'projectId',
      onDelete: 'CASCADE'
    });
  };
  return Bug;
};