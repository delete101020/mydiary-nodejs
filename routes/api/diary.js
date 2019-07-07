var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var diaryController = require('../../controllers').diaries;

namedRoute.post('diary.create', '/api/diary/create', authorize.hasRole, validators.diary, validators.isValid, diaryController.create);
namedRoute.get('diary.list', '/api/diary/list', authorize.hasRole, diaryController.list);
namedRoute.get('diary.detail', '/api/diary/:diaryId', authorize.hasRole, diaryController.retrieve);
namedRoute.put('diary.edit', '/api/diary/edit/:diaryId', authorize.hasRole, validators.diary, validators.isValid, diaryController.update);
namedRoute.delete('diary.delete', '/api/diary/delete/:diaryId', authorize.hasRole, diaryController.destroy);

module.exports = router;