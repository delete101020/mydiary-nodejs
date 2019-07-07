const { Account } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newAccount = req.body;
    return Account
      .create(newAccount)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Account
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(accounts => res.status(200).send(accounts))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const accountId = req.params.accountId;
    return Account
      .findByPk(accountId, {
        attributes: { exclude: attributes.exclude }
      })
      .then(account => {
        if(!account) {
          res.sendStatus(404);
        } else {
          res.status(200).send(account);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const accountId = req.params.accountId;
    return Account
      .findByPk(accountId)
      .then(account => {
        if(!account) {
          res.sendStatus(404);
        } else {
          let updateAccount = req.body;
          return account
            .update(updateAccount)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const accountId = req.params.accountId;
    return Account
      .findByPk(accountId)
      .then(account => {
        if(!account) {
          res.sendStatus(404);
        } else {
          return account
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}