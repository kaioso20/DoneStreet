'use strict';

const usuarioDB = require('../data/userDB');

module.exports.getUserRepository = (idUser, documentNumber, password, name) =>
  usuarioDB.filter((eachUser) => {
    let matchUser = false;
    if (idUser) matchUser = eachUser.idUser == idUser;
    if (password && matchUser) matchUser = eachUser.password == password;
    if (documentNumber && matchUser)
      matchUser = eachUser.documentNumber == documentNumber;
    if (name && matchUser) matchUser = eachUser.name == name;

    return matchUser ? eachUser : eachUser;
  });
