'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    website: DataTypes.STRING,
    director: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {});
  Client.associate = function(models) {
    Client.hasMany(models.Project, {
      foreignKey: 'clientId',
      as: 'projects'
    });
  };
  return Client;
};