'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    status: DataTypes.BOOLEAN,
    estimatedTime: DataTypes.INTEGER,
    totalSpentTime: DataTypes.INTEGER,
    estimatedDura: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.Client, {
      foreignKey: 'clientId',
      onDelete: 'SET NULL'
    });

    Project.hasMany(models.Bug, {
      foreignKey: 'projectId',
      as: 'bugs'
    });

    Project.hasMany(models.File, {
      foreignKey: 'projectId',
      as: 'files'
    });

    Project.belongsToMany(models.Framework, {
      foreignKey: 'projectId',
      as: 'frameworks',
      through: 'ProjectFramework'
    });

    Project.hasMany(models.Function, {
      foreignKey: 'projectId',
      as: 'functions'
    });

    Project.hasMany(models.Report, {
      foreignKey: 'projectId',
      as: 'reports'
    });

    Project.belongsToMany(models.User, {
      foreignKey: 'projectId',
      as: 'users',
      through: models.ProjectUser
    });
  };
  return Project;
};