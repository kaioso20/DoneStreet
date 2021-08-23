'use strict';
const { NotFound, InvalidDocument, InvalidPassword } =
  require('../languages/languageSet')();
const { getLoginRepository } = require('../repository/loginRepository');
const { jwtEncrypt } = require('../utils/crypo');

module.exports.getLoginServer = ({ documentNumber, password }) => {
  try {
    if (!!!documentNumber) return InvalidDocument;
    if (!!!password) return InvalidPassword;

    const bankResponse = getLoginRepository(documentNumber, password);

    if (!!!bankResponse) return NotFound;

    const bearerAuthToken = jwtEncrypt({
      userSecret: bankResponse.secret,
      userDoc: bankResponse.userDoc,
    });
    return { bearerAuthToken };
  } catch (error) {
    return error;
  }
};
