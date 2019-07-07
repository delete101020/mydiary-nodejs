const { Bug, File, Framework, Function, Project, Report, User } = require('../models');
const attributes = require('../config/config.sequelize');
const convertHelper = require('../helpers/convert');

module.exports = {
  create(req, res, next) {
    let newProject = req.body;
    return Project
      .create(newProject)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Project
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(projects => res.status(200).send(projects))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const projectId = req.params.projectId;
    return Project
      .findByPk(projectId, {
        attributes: { exclude: attributes.exclude },
        include: [
          {
            model: Framework,
            attributes: ['id'],
            as: 'frameworks',
            through: { attributes: [] }
          },
          {
            model: User,
            attributes: ['id'],
            as: 'users',
            through: {
              attributes: ['leader','manager'],
              as: 'roles'
            }
          }
        ]
      })
      .then(project => {
        if(!project) {
          res.sendStatus(404);
        } else {
          res.status(200).send(project);
        }        
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const projectId = req.params.projectId;
    return Project
      .findByPk(projectId)
      .then(project => {
        if(!project) {
          res.sendStatus(404);
        } else {
          let updateProject = req.body;
          return project
            .update(updateProject)
            .then(updatedProject => {
              if (updateProject.client) {
                updatedProject.setClient(updateProject.client);
              };

              if (updateProject.frameworks) {
                updatedProject.setFrameworks(updateProject.frameworks);
              };

              if (updateProject.users.length !== 0) {
                updatedProject.setUsers([]);
                updateProject.users.forEach(user => {
                  updatedProject.addUser(user.userId, { through: { leader: user.leader, manager: user.manager }});
                });
              }

              res.sendStatus(200);
            })
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const projectId = req.params.projectId;
    return Project
      .findByPk(projectId)
      .then(project => {
        if(!project) {
          res.sendStatus(404);
        } else {
          return project
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};