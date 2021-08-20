'use strict';

const { InternalServerError } = require('../languages/ptBR');
const { getLoginServer } = require('../service/loginService');

module.exports.getLogin = (req, res) => {
  const input = {
    documentNumber: req.query.documentNumber,
    password: req.query.password,
  };

  try {
    const response = getLoginServer(input);

    res.send(response).status(!!!response.message ? 200 : 406);
  } catch (error) {
    res.send(InternalServerError).status(500);
  }
};
