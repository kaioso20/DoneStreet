module.exports.InternalServerError = { message: 'Erro Interno no Servidor.' };
module.exports.InvalidToken = {
  statusCode: 401,
  error: 'Unauthorized',
  message: 'Token Inválido',
};
module.exports.NotFound = {
  statusCode: 200,
  error: 'ok',
  message: 'Nada foi encontrado!',
};
