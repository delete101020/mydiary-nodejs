const { Diary } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newDiary = req.body;
    return Diary
      .create(newDiary)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Diary
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(diaries => res.status(200).send(diaries))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const diaryId = req.params.diaryId;
    return Diary
      .findByPk(diaryId, {
        attributes: { exclude: attributes.exclude }
      })
      .then(diary => {
        if(!diary) {
          res.sendStatus(404);
        } else {
          res.status(200).send(diary);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const diaryId = req.params.diaryId;
    return Diary
      .findByPk(diaryId)
      .then(diary => {
        if(!diary) {
          res.sendStatus(404);
        } else {
          let updateDiary = req.body;
          return diary
            .update(updateDiary)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const diaryId = req.params.diaryId;
    return Diary
      .findByPk(diaryId)
      .then(diary => {
        if(!diary) {
          res.sendStatus(404);
        } else {
          return diary
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}