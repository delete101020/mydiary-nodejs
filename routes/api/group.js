var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var groupController = require('../../controllers').groups;

namedRoute.post('group.create', '/api/group/create', authorize.hasRole, validators.group, validators.isValid, groupController.create);
namedRoute.get('group.list', '/api/group/list', authorize.hasRole, groupController.list);
namedRoute.get('group.detail', '/api/group/:groupId', authorize.hasRole, groupController.retrieve);
namedRoute.put('group.edit', '/api/group/edit/:groupId', authorize.hasRole, groupController.update);
namedRoute.delete('group.delete', '/api/group/delete/:groupId', authorize.hasRole, groupController.destroy);

module.exports = router;