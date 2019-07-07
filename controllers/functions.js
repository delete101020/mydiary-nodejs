const { Function } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    const projectId = req.params.projectId;
    let newFunction = req.body;
    newFunction.projectId = projectId;
    return Function
      .create(newFunction)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    const projectId = req.params.projectId;
    return Function
      .findAll({
        attributes: { exclude: attributes.exclude },
        where: {
          projectId: projectId
        }
      })
      .then(functions => res.status(200).send(functions))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const projectId = req.params.projectId;
    const functionId = req.params.functionId;
    return Function
      .findOne({
        attributes: { exclude: attributes.exclude },
        where: {
          id: functionId,
          projectId: projectId
        }
      })
      .then(func => {
        if(!func) {
          res.sendStatus(404);
        } else {
          res.status(200).send(func);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const projectId = req.params.projectId;
    const functionId = req.params.functionId;
    return Function
      .findByPk(functionId, {
        where: {
          projectId: projectId
        }
      })
      .then(func => {
        if(!func) {
          res.sendStatus(404);
        } else {
          let updateFunction = req.body;
          return func
            .update(updateFunction)
            .then(updatedFunction => {
              if(updateFunction.user) {
                updatedFunction.setUser(updateFunction.user);
              }
              res.sendStatus(200)
            })
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const projectId = req.params.projectId;
    const functionId = req.params.functionId;
    return Function
      .findByPk(functionId, {
        where: {
          projectId: projectId
        }
      })
      .then(func => {
        if(!func) {
          res.sendStatus(404);
        } else {
          return func
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};