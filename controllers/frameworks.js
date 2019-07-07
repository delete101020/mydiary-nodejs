const { Framework, Project } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newFramework = req.body;
    return Framework
      .create(newFramework)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Framework
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(frameworks => res.status(200).send(frameworks))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const frameworkId = req.params.frameworkId;
    return Framework
      .findByPk(frameworkId, {
        attributes: { exclude: attributes.exclude },
        include: [{
          model: Project,
          attributes: { exclude: attributes.exclude },
          as: 'projects',
          through: { attributes: [] }          
        }]
      })
      .then(framework => {
        if(!framework) {
          res.sendStatus(404);
        } else {
          res.status(200).send(framework);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const frameworkId = req.params.frameworkId;
    return Framework
      .findByPk(frameworkId)
      .then(framework => {
        if(!framework) {
          res.sendStatus(404);
        } else {
          let updateFramework = req.body;
          return framework
            .update(updateFramework)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const frameworkId = req.params.frameworkId;
    return Framework
      .findByPk(frameworkId)
      .then(framework => {
        if(!framework) {
          res.sendStatus(404);
        } else {
          return framework
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
};