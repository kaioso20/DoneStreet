'use strict';

const { InternalServerError, Login, Validation, NotFound } =
  require('../languages/languageSet')();
const { getUserServer } = require('../service/userService');
const { jwtDecrypt } = require('../utils/crypo');

module.exports.getUser = (req, res) => {
  const { userDoc } = jwtDecrypt(req.headers.authorization);

  try {
    const response = getUserServer({ userDoc });

    if (!!response.message) {
      if (response.message === Login.InvalidUser)
        return res.send(response).status(406);

      if (response.message === Validation.Document)
        return res.send(response).status(400);

      if (response.message === NotFound) return res.send(response).status(404);
    }

    return res.send(response).status(200);
  } catch (error) {
    return res.send(InternalServerError).status(500);
  }
};
