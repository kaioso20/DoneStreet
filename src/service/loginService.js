'use strict';
const { Login, Validation } = require('../languages/languageSet')();
const { getLoginRepository } = require('../repository/loginRepository');
const { jwtEncrypt } = require('../utils/crypo');

module.exports.getLoginServer = ({ documentNumber, password }) => {
  try {
    if (!!!documentNumber) return Validation.Document;
    if (!!!password) return Validation.Password;

    const bankResponse = getLoginRepository(documentNumber, password);

    if (!!!bankResponse) return Login.InvalidUser;

    return {
      bearerAuthToken: jwtEncrypt({
        userSecret: bankResponse.secret,
        userDoc: bankResponse.documentNumber,
      }),
    };
  } catch (error) {
    return error;
  }
};
