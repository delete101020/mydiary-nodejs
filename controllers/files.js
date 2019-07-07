const { File } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    const projectId = req.params.projectId;
    let newFile = req.body;
    newFile.projectId = projectId;
    return File
      .create(newFile)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    const projectId = req.params.projectId;
    return File
      .findAll({
        attributes: { exclude: attributes.exclude },
        where: {
          projectId: projectId
        }
      })
      .then(files => res.status(200).send(files))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const projectId = req.params.projectId;
    const fileId = req.params.fileId;
    return File
      .findOne({
        attributes: { exclude: attributes.exclude },
        where: {
          id: fileId,
          projectId: projectId
        }
      })
      .then(file => {
        if(!file) {
          res.sendStatus(404);
        } else {
          res.status(200).send(file);
        }        
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const projectId = req.params.projectId;
    const fileId = req.params.fileId;
    return File
      .findByPk(fileId, {
        where: {
          projectId: projectId
        }
      })
      .then(file => {
        if(!file) {
          res.sendStatus(404);
        } else {
          let updateFile = req.body;
          return file
            .update(updateFile)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const projectId = req.params.projectId;
    const fileId = req.params.fileId;
    return File
      .findByPk(fileId, {
        where: {
          projectId: projectId
        }
      })
      .then(file => {
        if(!file) {
          res.sendStatus(404);
        } else {
          return file
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};