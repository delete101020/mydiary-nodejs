var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var frameworkController = require('../../controllers').frameworks;

namedRoute.post('framework.create', '/api/framework/create', authorize.hasRole, validators.framework, validators.isValid, frameworkController.create);
namedRoute.get('framework.list', '/api/framework/list', authorize.hasRole, frameworkController.list);
namedRoute.get('framework.detail', '/api/framework/:frameworkId', authorize.hasRole, frameworkController.retrieve);
namedRoute.put('framework.edit', '/api/framework/edit/:frameworkId', authorize.hasRole, validators.framework, validators.isValid, frameworkController.update);
namedRoute.delete('framework.delete', '/api/framework/delete/:frameworkId', authorize.hasRole, frameworkController.destroy);

module.exports = router;