var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var clientController = require('../../controllers').clients;

namedRoute.post('client.create', '/api/client/create', authorize.hasRole, validators.client, validators.isValid, clientController.create);
namedRoute.get('client.list', '/api/client/list', authorize.hasRole, clientController.list);
namedRoute.get('client.detail', '/api/client/:clientId', authorize.hasRole, clientController.retrieve);
namedRoute.put('client.edit', '/api/client/edit/:clientId', authorize.hasRole, clientController.update);
namedRoute.delete('client.delete', '/api/client/delete/:clientId', authorize.hasRole, clientController.destroy);

module.exports = router;