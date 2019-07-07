const { Calendar } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newCalendar = req.body;
    return Calendar
      .create(newCalendar)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Calendar
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(calendars => res.status(200).send(calendars))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const calendarId = req.params.calendarId;
    return Calendar
      .findByPk(calendarId, {
        attributes: { exclude: attributes.exclude }
      })
      .then(calendar => {
        if(!calendar) {
          res.sendStatus(404);
        } else {
          res.status(200).send(calendar);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const calendarId = req.params.calendarId;
    return Calendar
      .findByPk(calendarId)
      .then(calendar => {
        if(!calendar) {
          res.sendStatus(404);
        } else {
          let updateCalendar = req.body;
          return calendar
            .update(updateCalendar)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const calendarId = req.params.calendarId;
    return Calendar
      .findByPk(calendarId)
      .then(calendar => {
        if(!calendar) {
          res.sendStatus(404);
        } else {
          return calendar
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}