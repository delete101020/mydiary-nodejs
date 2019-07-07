const uploadHelper = require('../helpers/upload');

module.exports = {
  single(req, res, next) {
    if(req.file) {
      const file = req.file;
      const publicPath = uploadHelper.getPublicPath(file);
      return res.status(200).send({ name: file.originalname, path: publicPath });
    } else {
      return res.sendStatus(400);
    }
  },

  multi(req, res, next) {
    if(req.files) {
      const files = req.files;
      const filePath = [];
      files.forEach(file => {
        const name = file.originalname;
        const path = uploadHelper.getPublicPath(file);
        filePath.push({ 'name': name, 'path': path });
      })
      return res.status(200).send(filePath);
    } else {
      return res.sendStatus(400);
    }
  }
};