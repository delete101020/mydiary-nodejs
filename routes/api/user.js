var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var userController = require('../../controllers').users;

namedRoute.post('user.create', '/api/user/create', authorize.hasRole, validators.user, validators.isValid, userController.create);
namedRoute.get('user.list', '/api/user/list', authorize.hasRole, userController.list);
namedRoute.get('user.detail', '/api/user/:userId', authorize.hasRole, userController.retrieve);
namedRoute.put('user.edit', '/api/user/edit/:userId', authorize.hasRole, validators.user, validators.isValid, userController.update);
namedRoute.delete('user.delete', '/api/user/delete/:userId', authorize.hasRole, userController.destroy);

module.exports = router;