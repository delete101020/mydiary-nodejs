var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var bugController = require('../../controllers').bugs;

namedRoute.post('bug.create', '/api/project/:projectId/bug/create', authorize.hasRole, validators.bug, validators.isValid, bugController.create);
namedRoute.get('bug.list', '/api/project/:projectId/bug/list', authorize.hasRole, bugController.list);
namedRoute.get('bug.detail', '/api/project/:projectId/bug/:bugId', authorize.hasRole, bugController.retrieve);
namedRoute.put('bug.edit', '/api/project/:projectId/bug/edit/:bugId', authorize.hasRole, validators.bug, validators.isValid, bugController.update);
namedRoute.delete('bug.delete', '/api/project/:projectId/bug/delete/:bugId', authorize.hasRole, bugController.destroy);

module.exports = router;