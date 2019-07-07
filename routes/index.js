var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

namedRoute.use('/', require('./api'));
namedRoute.use('/', require('./auth'));

namedRoute.get('/', (req, res, next) => {
  res.status(200).send({ message: 'My diary - Node.JS project' });
});

module.exports = router;
