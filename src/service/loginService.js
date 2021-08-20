'use strict';
const { getLoginRepository } = require('../repository/loginRepository');
const { encrypt, jwtEncrypt } = require('../utils/criptografia');

module.exports.getLoginServer = ({ documentNumber, password }) => {
  try {
    const bankResponse = getLoginRepository(
      documentNumber,
      encrypt(password).content
    );

    const bearerAuthToken = jwtEncrypt({
      userId: bankResponse.userId,
      userDoc: bankResponse.userDoc,
    });
    return { ...bankResponse, bearerAuthToken };
  } catch (error) {
    return error;
  }
};
