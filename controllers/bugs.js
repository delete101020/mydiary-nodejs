const { Bug } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    const projectId = req.params.projectId;
    let newBug = req.body;
    newBug.projectId = projectId;
    return Bug
      .create(newBug)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    const projectId = req.params.projectId;
    return Bug
      .findAll({
        attributes: { exclude: attributes.exclude },
        where: {
          projectId: projectId
        }
      })
      .then(bugs => res.status(200).send(bugs))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const projectId = req.params.projectId;
    const bugId = req.params.bugId;
    return Bug
      .findOne({
        attributes: { exclude: attributes.exclude },
        where: {
          id: bugId,
          projectId: projectId
        }
      })
      .then(bug => {
        if(!bug) {
          res.sendStatus(404);
        } else {
          res.status(200).send(bug);
        }        
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const projectId = req.params.projectId;
    const bugId = req.params.bugId;
    return Bug
      .findByPk(bugId, {
        where: {
          projectId: projectId
        }
      })
      .then(bug => {
        if(!bug) {
          res.sendStatus(404);
        } else {
          let updateBug = req.body;
          return bug
            .update(updateBug)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const projectId = req.params.projectId;
    const bugId = req.params.bugId;
    return Bug
      .findByPk(bugId, {
        where: {
          projectId: projectId
        }
      })
      .then(bug => {
        if(!bug) {
          res.sendStatus(404);
        } else {
          return bug
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};