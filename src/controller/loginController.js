'use strict';

const { InternalServerError, Login, Validation } =
  require('../languages/languageSet')();
const { getLoginServer } = require('../service/loginService');

module.exports.getLogin = (req, res) => {
  const input = {
    documentNumber: req.query.documentNumber,
    password: req.query.password,
  };

  try {
    const response = getLoginServer(input);

    if (!!response.message) {
      if (response.message === Login.InvalidUser)
        return res.send(response).status(406);

      if (response.message === Validation.Document)
        return res.send(response).status(400);

      if (response.message === Validation.Password)
        return res.send(response).status(400);
    }

    return res.send(response).status(200);
  } catch (error) {
    return res.send(InternalServerError).status(500);
  }
};
