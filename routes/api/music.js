var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var musicController = require('../../controllers').music;

namedRoute.post('music.create', '/api/music/create', authorize.hasRole, validators.music, validators.isValid, musicController.create);
namedRoute.get('music.list', '/api/music/list', authorize.hasRole, musicController.list);
namedRoute.get('music.detail', '/api/music/:musicId', authorize.hasRole, musicController.retrieve);
namedRoute.put('music.edit', '/api/music/edit/:musicId', authorize.hasRole, validators.music, validators.isValid, musicController.update);
namedRoute.delete('music.delete', '/api/music/delete/:musicId', authorize.hasRole, musicController.destroy);

module.exports = router;