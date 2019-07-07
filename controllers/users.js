const { Job, Skill, User } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newUser = req.body;
    return User
      .create(newUser)
      .then(() => res.sendStatus(200))
      .catch(error => res.status(400).send(error))
  },

  list(req, res, next) {
    return User
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const userId=req.params.userId;
    return User
      .findByPk(userId, {
        attributes: { exclude: attributes.exclude },
        /*
        include: [
          {
            model: Job,
            attributes: ['id'],
            as: 'jobs'
          },
          {
            model: Skill,
            attributes: ['id'],
            as: 'skills'
          }
        ]
        */
      })
      .then(user => {
        if (!user) {
          res.sendStatus(404);
        } else {
          res.status(200).send(user);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const userId = req.params.userId;
    return User
      .findByPk(userId)
      .then(user => {
        if(!user) {
          res.sendStatus(404);
        } else {
          let updateUser = req.body;
          return user
            .update(updateUser)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const userId = req.params.userId;
    return User
      .findByPk(userId)
      .then(user => {
        if(!user) {
          res.sendStatus(404);
        } else {
          return user
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}