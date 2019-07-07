var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var fileController = require('../../controllers').files;

namedRoute.post('file.create', '/api/project/:projectId/file/create', authorize.hasRole, validators.file, validators.isValid, fileController.create);
namedRoute.get('file.list', '/api/project/:projectId/file/list', authorize.hasRole, fileController.list);
namedRoute.get('file.detail', '/api/project/:projectId/file/:fileId', authorize.hasRole, fileController.retrieve);
namedRoute.put('file.edit', '/api/project/:projectId/file/edit/:fileId', authorize.hasRole, validators.file, validators.isValid, fileController.update);
namedRoute.delete('file.delete', '/api/project/:projectId/file/delete/:fileId', authorize.hasRole, fileController.destroy);

module.exports = router;