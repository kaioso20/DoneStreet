module.exports.InternalServerError = { message: 'Internal Server Error.' };
module.exports.InvalidToken = {
  statusCode: 401,
  error: 'Unauthorized',
  message: 'invalid token',
};

module.exports.NotFound = {
  message: 'Nothing has found!',
};

module.exports.InvalidPassword = {
  message: 'Invalid Password',
};
module.exports.InvalidDocument = {
  message: 'Invalid Document',
};
