'use strict';
module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.INTEGER,
    desc: DataTypes.STRING
  }, {});
  Music.associate = function(models) {
    // associations can be defined here
  };
  return Music;
};