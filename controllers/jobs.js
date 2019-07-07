const { Job } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    const userId = req.params.userId;
    let newJob = req.body;
    newJob.userId = userId;
    return Job
      .create(newJob)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    const userId = req.params.userId;
    return Job
      .findAll({
        attributes: { exclude: attributes.exclude },
        where: {
          userId: userId
        }
      })
      .then(jobs => res.status(200).send(jobs))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const userId = req.params.userId;
    const jobId = req.params.jobId;
    return Job
      .findOne({
        attributes: { exclude: attributes.exclude },
        where: {
          id: jobId,
          userId: userId
        }
      })
      .then(job => {
        if(!job) {
          res.sendStatus(404);
        }
        res.status(200).send(job);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const userId = req.params.userId;
    const jobId = req.params.jobId;
    return Job
      .findByPk(jobId, {
        where: {
          userId: userId
        }
      })
      .then(job => {
        if(!job) {
          res.sendStatus(404);
        } else {
          let updateJob = req.body;
          return job
            .update(updateJob)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));    
  },

  destroy(req, res, next) {
    const userId = req.params.userId;
    const jobId = req.params.jobId;
    return Job
      .findByPk(jobId, {
        where: {
          userId: userId
        }
      })
      .then(job => {
        if(!job) {
          res.sendStatus(404);
        } else {
          return job
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }  
};