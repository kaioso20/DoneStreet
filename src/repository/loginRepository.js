'use strict';

const usuarioDB = require('../data/userDB');

module.exports.getLoginRepository = (documentNumber, password) =>
  usuarioDB.find(
    (eachUser) =>
      eachUser.documentNumber == documentNumber && eachUser.password == password
  );
