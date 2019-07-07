var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var skillController = require('../../controllers').skills;

namedRoute.post('skill.create', '/api/user/:userId/skill/create', authorize.hasRole, validators.skill, validators.isValid, skillController.create);
namedRoute.get('skill.list', '/api/user/:userId/skill/list', authorize.hasRole, skillController.list);
namedRoute.get('skill.detail', '/api/user/:userId/skill/:skillId', authorize.hasRole, skillController.retrieve);
namedRoute.put('skill.edit', '/api/user/:userId/skill/edit/:skillId', authorize.hasRole, validators.skill, validators.isValid, skillController.update);
namedRoute.delete('skill.delete', '/api/user/:userId/skill/delete/:skillId', authorize.hasRole, skillController.destroy);

module.exports = router;