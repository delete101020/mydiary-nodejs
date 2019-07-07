'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    birthday: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    avatar: DataTypes.STRING,
    advantages: DataTypes.STRING,
    defects: DataTypes.STRING,
    hobbies: DataTypes.STRING,
    marital: DataTypes.BOOLEAN,
    urlFB: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Group, {
      foreignKey: 'groupId',
      onDelete: 'SET NULL'
    });

    User.hasMany(models.Job, {
      foreignKey: 'userId',
      as: 'jobs'
    });

    User.hasMany(models.Skill, {
      foreignKey: 'userId',
      as: 'skills'
    });

    User.belongsToMany(models.Project, {
      foreignKey: 'userId',
      as: 'projects',
      through: models.ProjectUser
    });

    User.hasMany(models.Function, {
      foreignKey: 'userId',
      as: 'functions'
    });    
  };

  User.findByEmail = (email) => {
    return User
      .findAll({
        where: {
          email: email
        }
      })
  };

  return User;
};