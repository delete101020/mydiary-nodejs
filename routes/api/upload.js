var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var multer = require('multer');
var multerConfig = require('../../config/config.multer');
var upload = multer(multerConfig);
var uploadController = require('../../controllers').uploads;

namedRoute.post('upload.single', '/upload/single', upload.single('image'), uploadController.single);
namedRoute.post('upload.multi', '/upload/multi', upload.array('images', 10), uploadController.multi);

module.exports = router;
