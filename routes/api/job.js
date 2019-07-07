var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var jobController = require('../../controllers').jobs;

namedRoute.post('job.create', '/api/user/:userId/job/create', authorize.hasRole, validators.job, validators.isValid, jobController.create);
namedRoute.get('job.list', '/api/user/:userId/job/list', authorize.hasRole, jobController.list);
namedRoute.get('job.detail', '/api/user/:userId/job/:jobId', authorize.hasRole, jobController.retrieve);
namedRoute.put('job.edit', '/api/user/:userId/job/edit/:jobId', authorize.hasRole, validators.job, validators.isValid, jobController.update);
namedRoute.delete('job.delete', '/api/user/:userId/job/delete/:jobId', authorize.hasRole, jobController.destroy);

module.exports = router;