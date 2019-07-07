const { Group, User } = require('../models');
const attributes = require('../config/config.sequelize');
const convertHelper = require('../helpers/convert');

module.exports = {
  create(req, res, next) {
    let newGroup = req.body;
    return Group
      .create(newGroup)
      .then(() => res.sendStatus(200))
      .catch(error => res.status(400).send(error))
  },

  list(req, res, next) {
    return Group
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const groupId = req.params.groupId;
    return Group
      .findByPk(groupId, {
        attributes: { exclude: attributes.exclude },
        include: [{
          model: User,
          attributes: ['id'],
          as: 'users'
        }]
      })
      .then(group => {
        if(!group) {
          res.sendStatus(404);
        } else {
          res.status(200).send(group);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const groupId = req.params.groupId;
    return Group
      .findByPk(groupId)
      .then(group => {
        if(!group) {
          res.sendStatus(404);
        } else {
          let updateGroup = req.body;
          return group
            .update(updateGroup)
            .then(updatedGroup => {
              if(updateGroup.users) {
                // let users = convertHelper.fromStringToNumberArray(updateGroup.users);
                updatedGroup.setUsers(updateGroup.users);
              }
              res.sendStatus(200);
            })
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const groupId = req.params.groupId;
    return Group
      .findByPk(groupId)
      .then(group => {
        if(!group) {
          res.sendStatus(404);
        } else {
          return group
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}