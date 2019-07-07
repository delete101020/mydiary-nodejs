var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var reportController = require('../../controllers').reports;

namedRoute.post('report.create', '/api/project/:projectId/report/create', authorize.hasRole, validators.report, validators.isValid, reportController.create);
namedRoute.get('report.list', '/api/project/:projectId/report/list', authorize.hasRole, reportController.list);
namedRoute.get('report.detail', '/api/project/:projectId/report/:reportId', authorize.hasRole, reportController.retrieve);
namedRoute.put('report.edit', '/api/project/:projectId/report/edit/:reportId', authorize.hasRole, validators.report, validators.isValid, reportController.update);
namedRoute.delete('report.delete', '/api/project/:projectId/report/delete/:reportId', authorize.hasRole, reportController.destroy);

module.exports = router;