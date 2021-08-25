const { getUserRepository } = require('../repository/userRepository');
const { Login, NotFound } = require('../languages/languageSet')();

module.exports.getUserServer = ({ userDoc }) => {
  try {
    if (!!!userDoc) return Login.InvalidUser;

    const response = getUserRepository(userDoc);

    if (!!!response) return NotFound;

    return response;
  } catch (error) {
    return error;
  }
};
