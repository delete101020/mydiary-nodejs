'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    percent: DataTypes.INTEGER
  }, {});
  Skill.associate = function(models) {
    Skill.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Skill;
};