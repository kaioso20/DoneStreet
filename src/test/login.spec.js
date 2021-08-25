const { Login, Validation } = require('../languages/Translations/enUS');
const { getLoginServer } = require('../service/loginService');
const { correctUser, wrongUser, nullPasswordUser, nullDocumentUser } = require('./mock/loginMock');

describe('environmental variables', () => {
    test('Correct login', () => expect(getLoginServer(correctUser)).toHaveProperty('bearerAuthToken'));
    test('Wrong login - not match', () => expect(getLoginServer(wrongUser)).toBe(Login.InvalidUser))
    test('Wrong login - null password', () => expect(getLoginServer(nullPasswordUser)).toBe(Validation.Password))
    test('Wrong login - null document', () => expect(getLoginServer(nullDocumentUser)).toBe(Validation.Document))
  });

