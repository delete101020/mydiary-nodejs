'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectUser = sequelize.define('ProjectUser', {
    leader: DataTypes.BOOLEAN,
    manager: DataTypes.BOOLEAN
  }, {});
  ProjectUser.associate = function(models) {
    // associations can be defined here
  };
  return ProjectUser;
};