'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.INTEGER,
    desc: DataTypes.STRING
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
  };
  return Video;
};