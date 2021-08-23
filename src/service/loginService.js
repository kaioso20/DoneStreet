'use strict';
const { getLoginRepository } = require('../repository/loginRepository');
const { jwtEncrypt } = require('../utils/criptografia');

module.exports.getLoginServer = ({ documentNumber, password }) => {
  try {
    const bankResponse = getLoginRepository(documentNumber, password);

    if (!!!bankResponse) return {};

    const bearerAuthToken = jwtEncrypt({
      userId: bankResponse.userId,
      userDoc: bankResponse.userDoc,
    });
    return { ...bankResponse, bearerAuthToken };
  } catch (error) {
    return error;
  }
};
