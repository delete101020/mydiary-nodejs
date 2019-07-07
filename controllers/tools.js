const { Tool } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newTool = req.body;
    return Tool
      .create(newTool)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Tool
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(tools => res.status(200).send(tools))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const toolId = req.params.toolId;
    return Tool
      .findByPk(toolId, {
        attributes: { exclude: attributes.exclude }
      })
      .then(tool => {
        if(!tool) {
          res.sendStatus(404);
        } else {
          res.status(200).send(tool);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const toolId = req.params.toolId;
    return Tool
      .findByPk(toolId)
      .then(tool => {
        if(!tool) {
          res.sendStatus(404);
        } else {
          let updateTool = req.body;
          return tool
            .update(updateTool)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const toolId = req.params.toolId;
    return Tool
      .findByPk(toolId)
      .then(tool => {
        if(!tool) {
          res.sendStatus(404);
        } else {
          return tool
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}