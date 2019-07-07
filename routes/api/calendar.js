var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var authorize = require('../../auth/authorize');
var validators = require('../../validators/formCheck');

var calendarController = require('../../controllers').calendars;

namedRoute.post('calendar.create', '/api/calendar/create', authorize.hasRole, validators.calendar, validators.isValid, calendarController.create);
namedRoute.get('calendar.list', '/api/calendar/list', authorize.hasRole, calendarController.list);
namedRoute.get('calendar.detail', '/api/calendar/:calendarId', authorize.hasRole, calendarController.retrieve);
namedRoute.put('calendar.edit', '/api/calendar/edit/:calendarId', authorize.hasRole, validators.calendar, validators.isValid, calendarController.update);
namedRoute.delete('calendar.delete', '/api/calendar/delete/:calendarId', authorize.hasRole, calendarController.destroy);

module.exports = router;