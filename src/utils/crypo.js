const JWT = require('jsonwebtoken');

const sharedSecret = 'doneStreet';

const jwtEncrypt = ({ userSecret, userDoc }) =>
  `Bearer ${JWT.sign({ userSecret, userDoc }, sharedSecret, {
    expiresIn: 3600,
  })}`;

const jwtDecrypt = (token = null) => {
  try {
    if (!!!token) throw new Error();

    token = token.replace('Bearer ', '');
    const { userSecret, userDoc } = JWT.decode(token, {});
    return { userSecret, userDoc };
  } catch (error) {
    return { userSecret: null, userDoc: null };
  }
};

const jwtVerification = (token) =>
  JWT.verify(token, sharedSecret, (verificationError, decodedToken) => {
    if (verificationError != null)
      return { verificationError: true, auth: null };

    return { verificationError: null, auth: decodedToken };
  });

module.exports = { jwtEncrypt, jwtDecrypt, jwtVerification };
