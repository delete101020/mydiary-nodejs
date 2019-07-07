var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var functionController = require('../../controllers').functions;

namedRoute.post('function.create', '/api/project/:projectId/function/create', authorize.hasRole, validators.function, validators.isValid, functionController.create);
namedRoute.get('function.list', '/api/project/:projectId/function/list', authorize.hasRole, functionController.list);
namedRoute.get('function.detail', '/api/project/:projectId/function/:functionId', authorize.hasRole, functionController.retrieve);
namedRoute.put('function.edit', '/api/project/:projectId/function/edit/:functionId', authorize.hasRole, validators.function, validators.isValid, functionController.update);
namedRoute.delete('function.delete', '/api/project/:projectId/function/delete/:functionId', authorize.hasRole, functionController.destroy);

module.exports = router;