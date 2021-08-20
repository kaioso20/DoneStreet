'use strict';

const userDB = require('../data/userDB');

module.exports.getLoginRepository = (documentNumber, password) =>
  userDB.find(
    (eachUser) =>
      eachUser.documentNumber == documentNumber && eachUser.password == password
  );
