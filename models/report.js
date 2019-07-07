'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    title: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {});
  Report.associate = function(models) {
    Report.belongsTo(models.Project, {
      foreignKey: 'projectId',
      onDelete: 'CASCADE'
    });
  };
  return Report;
};