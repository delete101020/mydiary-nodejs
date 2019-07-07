var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var projectController = require('../../controllers').projects;

namedRoute.post('project.create', '/api/project/create', authorize.hasRole, validators.project, validators.isValid, projectController.create);
namedRoute.get('project.list', '/api/project/list', authorize.hasRole, projectController.list);
namedRoute.get('project.detail', '/api/project/:projectId', authorize.hasRole, projectController.retrieve);
namedRoute.put('project.edit', '/api/project/edit/:projectId', authorize.hasRole, validators.project, validators.isValid, projectController.update);
namedRoute.delete('project.delete', '/api/project/delete/:projectId', authorize.hasRole, projectController.destroy);

module.exports = router;