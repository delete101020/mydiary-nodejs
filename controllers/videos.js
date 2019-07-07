const { Video } = require('../models');
const attributes = require('../config/config.sequelize');

module.exports = {
  create(req, res, next) {
    let newVideo = req.body;
    return Video
      .create(newVideo)
      .then(() => res.sendStatus(201))
      .catch(error => res.status(400).send(error));
  },

  list(req, res, next) {
    return Video
      .findAll({
        attributes: { exclude: attributes.exclude }
      })
      .then(videos => res.status(200).send(videos))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res, next) {
    const videoId = req.params.videoId;
    return Video
      .findByPk(videoId, {
        attributes: { exclude: attributes.exclude }
      })
      .then(video => res.status(200).send(video))
      .catch(error => res.status(400).send(error));
  },

  update(req, res, next) {
    const videoId = req.params.videoId;
    return Video
      .findByPk(videoId)
      .then(video => {
        if(!video) {
          res.status(404).send({ message: 'Not Found' });
        } else {
          let updateVideo = req.body;
          return video
            .update(updateVideo)
            .then(() => res.status(200).send({ message: 'OK' }))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res, next) {
    const videoId = req.params.videoId;
    return Video
      .findByPk(videoId)
      .then(video => {
        if(!video) {
          res.status(404).send({ message: 'Not Found' });
        } else {
          return video
            .destroy()
            .then(() => res.status(200).send({ message: 'OK' }))
            .catch(error => res.status(400).send(error));
        }
      })
      .catch(error => res.status(400).send(error));
  }
}