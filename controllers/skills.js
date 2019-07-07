const { Skill } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    const userId = req.params.userId;
    let newSkill = req.body;
    newSkill.userId = userId;
    return Skill
      .create(newSkill)
      .then(skill => {
        res.sendStatus(201);
      })
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    const userId = req.params.userId;
    return Skill
      .findAll({
        attributes: { exclude: attributes.exclude },
        where: {
          userId: userId
        }
      })
      .then(skills => res.status(200).send(skills))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const userId = req.params.userId;
    const skillId = req.params.skillId;
    return Skill
      .findOne({
        attributes: { exclude: attributes.exclude },
        where: {
          id: skillId,
          userId: userId
        }
      })
      .then(skill => {
        if(!skill) {
          res.sendStatus(404);
        }
        res.status(200).send(skill);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const userId = req.params.userId;
    const skillId = req.params.skillId;
    return Skill
      .findByPk(skillId, {
        where: {
          userId: userId
        }
      })
      .then(skill => {
        if(!skill) {
          res.sendStatus(404);
        } else {
          let updateSkill = req.body;
          return skill
            .update(updateSkill)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const userId = req.params.userId;
    const skillId = req.params.skillId;
    return Skill
      .findByPk(skillId, {
        where: {
          userId: userId
        }
      })
      .then(skill => {
        if(!skill) {
          res.sendStatus(404);
        } else {
          return skill
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};