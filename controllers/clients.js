const { Client, Project } = require('../models');
const attributes = require('../config/config.sequelize');
const convertHelper = require('../helpers/convert');

module.exports = {
  create(req, res, next) {
    let newClient = req.body;
    return Client
      .create(newClient)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Client
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(clients => res.status(200).send(clients))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const clientId = req.params.clientId;
    return Client
      .findByPk(clientId, {
        attributes: { exclude: attributes.exclude },
        include: [{
          model: Project,
          attributes: { exclude: attributes.exclude },
          as: 'projects'
        }]
      })
      .then(client => {
        if(!client) {
          res.sendStatus(404);
        } else {
          res.status(200).send(client);
        }        
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const clientId = req.params.clientId;
    return Client
      .findByPk(clientId)
      .then(client => {
        if(!client) {
          res.sendStatus(404);
        } else {
          let updateClient = req.body;
          return client
            .update(updateClient)
            .then(updatedClient => {
              if(updateClient.projects) {
                // let projects = convertHelper.fromStringToNumberArray(updateClient.projects);
                updatedClient.setProjects(updateClient.projects);
              }
              res.sendStatus(200);
            })
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const clientId = req.params.clientId;
    return Client
      .findByPk(clientId)
      .then(client => {
        if(!client) {
          res.sendStatus(404);
        } else {
          return client
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};