const JWT = require('jsonwebtoken');

const jwtEncrypt = ({ userSecret, userDoc }) =>
  `Bearer ${JWT.sign({ userSecret, userDoc }, 'doneStreet', {
    expiresIn: 3600,
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
