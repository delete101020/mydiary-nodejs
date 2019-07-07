var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

var auth = require('../../auth/authenticate')();
namedRoute.use('/api', auth.jwtAuth());

namedRoute.use('/', require('./account'));
namedRoute.use('/', require('./bug'));
namedRoute.use('/', require('./calendar'));
namedRoute.use('/', require('./client'));
namedRoute.use('/', require('./diary'));
namedRoute.use('/', require('./file'));
namedRoute.use('/', require('./finance'));
namedRoute.use('/', require('./framework'));
namedRoute.use('/', require('./function'));
namedRoute.use('/', require('./group'));
namedRoute.use('/', require('./job'));
namedRoute.use('/', require('./music'));
namedRoute.use('/', require('./project'));
namedRoute.use('/', require('./report'));
namedRoute.use('/', require('./skill'));
namedRoute.use('/', require('./tool'));
namedRoute.use('/', require('./upload'));
namedRoute.use('/', require('./user'));
namedRoute.use('/', require('./video'));

namedRoute.get('/api', (req, res, next) => {
  res.status(200).send({ message: 'API zone' });
});

module.exports = router;
