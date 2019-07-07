'use strict';
module.exports = (sequelize, DataTypes) => {
  const Framework = sequelize.define('Framework', {
    name: DataTypes.STRING,
    summary: DataTypes.STRING,
    desc: DataTypes.TEXT,
    researchDate: DataTypes.DATEONLY,
    url: DataTypes.STRING
  }, {});
  Framework.associate = function(models) {
    Framework.belongsToMany(models.Project, {
      foreignKey: 'frameworkId',
      as: 'projects',
      through: 'ProjectFramework'
    });
  };
  return Framework;
};