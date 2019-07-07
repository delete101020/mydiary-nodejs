'use strict';
module.exports = (sequelize, DataTypes) => {
  const Function = sequelize.define('Function', {
    name: DataTypes.STRING,
    estimatedTime: DataTypes.INTEGER,
    logTime: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    priority: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    type: DataTypes.INTEGER
  }, {});
  Function.associate = function(models) {
    Function.belongsTo(models.Project, {
      foreignKey: 'projectId',
      onDelete: 'CASCADE'
    });

    Function.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Function;
};