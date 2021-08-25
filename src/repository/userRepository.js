'use strict';

const usuarioDB = require('../data/userDB');

module.exports.getUserRepository = (userDoc) =>
  usuarioDB.find((eachUser) => eachUser.documentNumber === userDoc);
