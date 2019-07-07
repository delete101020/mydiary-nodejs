'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    role: DataTypes.TEXT
  }, {});
  Group.associate = function(models) {
    Group.hasMany(models.User, {
      foreignKey: 'groupId',
      as: 'users'
    });
  };

  Group.findByName = (name) => {
    return Group
      .findAll({
        where: {
          name: name
        }
      })
  };

  return Group;
};