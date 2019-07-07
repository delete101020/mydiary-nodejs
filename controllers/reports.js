const { Report } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    const projectId = req.params.projectId;
    let newReport = req.body;
    newReport.projectId = projectId;
    return Report
      .create(newReport)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    const projectId = req.params.projectId;
    return Report
      .findAll({
        attributes: { exclude: attributes.exclude },
        where: {
          projectId: projectId
        }
      })
      .then(reports => res.status(200).send(reports))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const projectId = req.params.projectId;
    const reportId = req.params.reportId;
    return Report
      .findOne({
        attributes: { exclude: attributes.exclude },
        where: {
          id: reportId,
          projectId: projectId
        }
      })
      .then(report => {
        if(!report) {
          res.sendStatus(404);
        } else {
          res.status(200).send(report);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const projectId = req.params.projectId;
    const reportId = req.params.reportId;
    return Report
      .findByPk(reportId, {
        where: {
          projectId: projectId
        }
      })
      .then(report => {
        if(!report) {
          res.sendStatus(404);
        } else {
          let updateReport = req.body;
          return report
            .update(updateReport)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const projectId = req.params.projectId;
    const reportId = req.params.reportId;
    return Report
      .findByPk(reportId, {
        where: {
          projectId: projectId
        }
      })
      .then(report => {
        if(!report) {
          res.sendStatus(404);
        } else {
          return report
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};