var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var videoController = require('../../controllers').videos;

namedRoute.post('video.create', '/api/video/create', authorize.hasRole, validators.video, validators.isValid, videoController.create);
namedRoute.get('video.list', '/api/video/list', authorize.hasRole, videoController.list);
namedRoute.get('video.detail', '/api/video/:videoId', authorize.hasRole, videoController.retrieve);
namedRoute.put('video.edit', '/api/video/edit/:videoId', authorize.hasRole, validators.video, validators.isValid, videoController.update);
namedRoute.delete('video.delete', '/api/video/delete/:videoId', authorize.hasRole, videoController.destroy);

module.exports = router;