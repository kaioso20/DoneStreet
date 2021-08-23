'use strict';

const { InternalServerError } = require('../languages/languageSet')();
const { getLoginServer } = require('../service/loginService');

module.exports.getLogin = (req, res) => {
  const input = {
    documentNumber: req.query.documentNumber,
    password: req.query.password,
  };

  try {
    const response = getLoginServer(input);

    return res.send(response).status(200);
  } catch (error) {
    return res.send(InternalServerError).status(500);
  }
};
