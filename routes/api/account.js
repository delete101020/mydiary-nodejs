var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var accountController = require('../../controllers').accounts;

namedRoute.post('account.create', '/api/account/create', authorize.hasRole, validators.account, validators.isValid, accountController.create);
namedRoute.get('account.list', '/api/account/list', authorize.hasRole, accountController.list);
namedRoute.get('account.detail', '/api/account/:accountId', authorize.hasRole, accountController.retrieve);
namedRoute.put('account.edit', '/api/account/edit/:accountId', authorize.hasRole, validators.account, validators.isValid, accountController.update);
namedRoute.delete('account.delete', '/api/account/delete/:accountId', authorize.hasRole, accountController.destroy);

module.exports = router;