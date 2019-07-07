var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var financeController = require('../../controllers').finances;

namedRoute.post('finance.create', '/api/finance/create', authorize.hasRole, validators.finance, validators.isValid, financeController.create);
namedRoute.get('finance.list', '/api/finance/list', authorize.hasRole, financeController.list);
namedRoute.get('finance.detail', '/api/finance/:financeId', authorize.hasRole, financeController.retrieve);
namedRoute.put('finance.edit', '/api/finance/edit/:financeId', authorize.hasRole, validators.finance, validators.isValid, financeController.update);
namedRoute.delete('finance.delete', '/api/finance/delete/:financeId', authorize.hasRole, financeController.destroy);

module.exports = router;