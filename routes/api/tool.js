var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var toolController = require('../../controllers').tools;

namedRoute.post('tool.create', '/api/tool/create', authorize.hasRole, validators.tool, validators.isValid, toolController.create);
namedRoute.get('tool.list', '/api/tool/list', authorize.hasRole, toolController.list);
namedRoute.get('tool.detail', '/api/tool/:toolId', authorize.hasRole, toolController.retrieve);
namedRoute.put('tool.edit', '/api/tool/edit/:toolId', authorize.hasRole, validators.tool, validators.isValid, toolController.update);
namedRoute.delete('tool.delete', '/api/tool/delete/:toolId', authorize.hasRole, toolController.destroy);

module.exports = router;