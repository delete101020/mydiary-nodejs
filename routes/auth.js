var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

const { Group } = require('../models');

var auth = require('../auth/authenticate')();
var jwt = require('jsonwebtoken');
var jwtConfig = require('../config/config.jwt');

const convertHelper = require('../helpers/convert');

namedRoute.post('auth.login', '/auth/login', auth.localAuth(), (req, res, next) => {
  const payload = {
    id: req.user.id,
    name: req.user.name,
    role: req.user.groupId
  };
  const token = jwt.sign(payload, jwtConfig.jwtSecret);
  res.status(200).send({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar,
    roleId: req.user.groupId,
    token: token
  });
});

namedRoute.get('/auth/routes', auth.jwtAuth(), (req, res, next) => {
  let routes = convertHelper.fromRouteTableToRouteArray(namedRoute.getRouteTable());
  res.status(200).send(routes);
});

namedRoute.get('/auth/roles/:id', auth.jwtAuth(), (req, res, next) => {
  const id = req.params.id;
  return Group
    .findByPk(id)
    .then(group => {
      if (!group) {
        res.sendStatus(404);
      } else {
        res.status(200).send({ roles: group.role });
      }
    })
    .catch(error => res.status(400).send(error));
})

module.exports = router;