module.exports.InternalServerError = { message: 'Erro Interno no Servidor.' };
module.exports.InvalidToken = {
  statusCode: 401,
  error: 'Unauthorized',
  message: 'Token Inválido',
};

module.exports.NotFound = {
  message: 'Nada foi encontrado!',
};

module.exports.Validation = {
  Password: { message: 'Senha é obrigatória' },
  Document: { message: 'Documento é obrigatório' },
};

module.exports.Login = {
  InvalidUser: { message: 'Credenciais inválidas' },
  InvalidPassword: { message: 'Senha Inválida' },
  InvalidDocument: { message: 'Documento Inválida' },
};
