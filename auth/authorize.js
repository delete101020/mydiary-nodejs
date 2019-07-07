const converHelper = require('../helpers/convert');

const { Group } = require('../models');

module.exports = {
  hasRole(req, res, next) {
    let name = converHelper.fromPathToName(req.path);
    if(req.user) {
      const groupId = req.user.groupId;
      Group.findByPk(groupId)
        .then(group => {
          if(group) {
            if(group.role.indexOf(name) === -1) {
              return res.sendStatus(403);
            } else {
              return next();
            }
          } else {
            return res.sendStatus(403);
          }
        });
    } else {
      return res.sendStatus(403);
    }
  }
};