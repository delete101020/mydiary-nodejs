const { Music } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newMusic = req.body;
    return Music
      .create(newMusic)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Music
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(musics => res.status(200).send(musics))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const musicId = req.params.musicId;
    return Music
      .findByPk(musicId, {
        attributes: { exclude: attributes.exclude }
      })
      .then(music => {
        if(!music) {
          res.sendStatus(404);
        } else {
          res.status(200).send(music);
        }
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const musicId = req.params.musicId;
    return Music
      .findByPk(musicId)
      .then(music => {
        if(!music) {
          res.sendStatus(404);
        } else {
          let updateMusic = req.body;
          return music
            .update(updateMusic)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const musicId = req.params.musicId;
    return Music
      .findByPk(musicId)
      .then(music => {
        if(!music) {
          res.sendStatus(404);
        } else {
          return music
            .destroy()
            .then(() => res.sendStatus(200))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}