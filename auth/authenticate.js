const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/config.jwt.js');
const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  jwtStrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;
const { User } = require('../models');

module.exports = () => {
  const login = new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  }, (username, password, done) => {
    User.findOne({
      where: {
        email: username
      }
    })
      .then(user => {
        if(!user) {
          return done(null, false);
        } else {
          if(user.password.localeCompare(password) !== 0) {
            return done(null, false);
          }
        }
        return done(null, user);
      })
      .catch(error => done(error));
  });

  const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtConfig.jwtSecret
  };

  const jwt = new jwtStrategy(jwtOptions, (jwtPayload, done) => {
    User.findOne({
      where: {
        id: jwtPayload.id
      }
    })
      .then(user => {
        if(user) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch(error => done(error));
  });

  passport.use(login);
  passport.use(jwt);

  return {
    initialize: () => {
      return passport.initialize();
    },
    localAuth: () => {
      return passport.authenticate('local', jwtConfig.jwtSession);
    },
    jwtAuth: () => {
      return passport.authenticate('jwt', jwtConfig.jwtSession);
    }
  };
};