module.exports.InternalServerError = { message: 'Internal Server Error.' };
module.exports.InvalidToken = {
  statusCode: 401,
  error: 'Unauthorized',
  message: 'invalid token',
};

module.exports.NotFound = {
  message: 'Nothing has found!',
};

module.exports.Validation = {
  Password: { message: 'Password is required' },
  Document: { message: 'Document is required' },
};

module.exports.Login = {
  InvalidUser: { message: 'Invalid Credentials' },
  InvalidPassword: { message: 'Invalid Password' },
  InvalidDocument: { message: 'Invalid Document' },
};
