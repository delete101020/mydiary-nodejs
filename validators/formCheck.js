const { check, validationResult } = require('express-validator/check');
const { Group, User } = require('../models');

module.exports = {
  group: [
    check('name')
      .not().isEmpty()
      .isString()
      .custom(value => {
        return Group
          .findByName(value)
          .then(groups => {
            if(groups.length > 0) {
              return Promise.reject(value + '\'s already in use');
            } else {
              return true;
            }
          })
      }),
    check('role')
  ],
  user: [
    check('name')
      .not().isEmpty()
      .isString(),
    check('email')
      .not().isEmpty()
      .isEmail()
      .custom((value, { req }) => {
        if(req.method === 'POST') {
          return User
          .findByEmail(value)
          .then(users => {
            if(users.length > 0) {
              return Promise.reject(value + '\'s already in use');
            }
          })
        } else {
          return true;
        }        
      }),
    check('password')
      .not().isEmpty().withMessage('Password can\'t be null')
      .isString()
      .isLength({ min: 8 }),
    check('retypePassword')
      .custom((value, { req }) => {
        if(req.method === 'POST') {
          if(value.trim() !== req.body.password.trim()) {
            throw new Error ('Password confirmation does not match password');
          } else {
            return true;
          }
        } else {
          return true;
        }
      }),
    check('phone'),
    check('gender')
      .isBoolean(),
    check('birthday'),
    check('address')
      .isString(),
    check('avatar'),
    check('advantages')
      .isString(),
    check('defects')
      .isString(),
    check('hobbies')
      .isString(),
    check('marital')
      .isBoolean(),
    check('urlFB')
  ],
  job: [],
  skill: [],
  client: [],
  project: [],
  bug: [],
  file: [],
  framework: [],
  function: [],
  report: [],
  account: [],
  calendar: [],
  diary: [],
  finance: [],
  music: [],
  tool: [],
  video: [],

  isValid(req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(422).send(errors.array({ onlyFirstError: true }));
    }
    next();
  }
};