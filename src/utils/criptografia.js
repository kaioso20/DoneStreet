const JWT = require('jsonwebtoken');

const jwtEncrypt = ({ userId, userDoc }) =>
  `Bearer ${JWT.sign({ userId, userDoc }, process.env.ENV_JWT_ENCRYPTION, {
    expiresIn: parseInt(process.env.ENV_JWT_EXPIRATION),
  })}`;

const jwtDecrypt = (token = null) => {
  try {
    if (!!!token) throw new Error();

    token = token.replace('Bearer ', '');
    const { userId, userDoc } = JWT.decode(token, {});
    return { userId, userDoc };
  } catch (error) {
    return { userId: null, userDoc: null };
  }
};

module.exports = { jwtEncrypt, jwtDecrypt };
