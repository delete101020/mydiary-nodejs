const { Finance } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newFinance = req.body;
    return Finance
      .create(newFinance)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Finance
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(finances => res.status(200).send(finances))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const financeId = req.params.financeId;
    return Finance
      .findByPk(financeId, {
        attributes: { exclude: attributes.exclude }
      })
      .then(finance => {
        if(!finance) {
          res.sendStatus(404);
        } else {
          res.status(200).send(finance);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const financeId = req.params.financeId;
    return Finance
      .findByPk(financeId)
      .then(finance => {
        if(!finance) {
          res.sendStatus(404);
        } else {
          let updateFinance = req.body;
          return finance
            .update(updateFinance)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const financeId = req.params.financeId;
    return Finance
      .findByPk(financeId)
      .then(finance => {
        if(!finance) {
          res.sendStatus(404);
        } else {
          return finance
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}