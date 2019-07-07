var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },

  filename: function(req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
  }
});

var multerConfig = {
  storage: storage,
  fileFilter: function(req, file, cb) {
    if(!file) {
      cb(null, false);
    }
    const type = file.mimetype.split('/')[0];
    if(type !== 'image') {
      return cb(new Error('Only images are allowed'));
    }
    cb(null, true);
  }
};

module.exports = multerConfig;