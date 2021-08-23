module.exports.InternalServerError = { message: 'Internal Server Error.' };
module.exports.InvalidToken = {
  statusCode: 401,
  error: 'Unauthorized',
  message: 'invalid token',
};

module.exports.NotFound = {
  message: 'Nothing has found!',
};
