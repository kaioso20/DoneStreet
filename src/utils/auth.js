'use strict';

const jwt = require('jsonwebtoken');
const { InvalidToken } = require('../languages/ptBR');
const sharedSecret = 'doneStreet';

exports.validationJWT = (req, res, next) => {
  let bearer = req.headers.authorization;

  if (!!!bearer) return invalidToken(res);

  const token = bearer.replace('Bearer ', '');

  jwt.verify(token, sharedSecret, (verificationError, decodedToken) => {
    if (verificationError != null) return invalidToken(res);

    req.auth = decodedToken;
    return next();
  });
};

const invalidToken = (res) =>
  res.send(InvalidToken).status(InvalidToken.statusCode);
