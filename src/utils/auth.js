'use strict';

const { jwtVerification } = require('./crypo');
const { InvalidToken } = require('../languages/languageSet')();

exports.validationJWT = (req, res, next) => {
  try {
    let bearer = req.headers.authorization;

    if (!!!bearer) return invalidToken(res);

    const token = bearer.replace('Bearer ', '');

    const validation = jwtVerification(token);

    if (!!validation.verificationError) return invalidToken(res);

    req.auth = validation.auth;
    return next();
  } catch (error) {
    return invalidToken(res);
  }
};

const invalidToken = (res) =>
  res.send(InvalidToken).status(InvalidToken.statusCode);
