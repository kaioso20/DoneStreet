const { NotFound, InvalidDocument, InvalidPassword } = require('../languages/languageSet')();
const { getLoginServer } = require('../service/loginService');

const wrongUser = { documentNumber: 1555556, password: 12121212  }
const nullDocumentUser = { documentNumber: null, password: 12121212  }
const nullPasswordUser = { documentNumber: 1555556, password: null  }

describe('environmental variables', () => {
    test('Wrong login - not match', () => expect(getLoginServer(wrongUser)).toBe(NotFound))
    test('Wrong login - null password', () => expect(getLoginServer(nullPasswordUser)).toBe(InvalidPassword))
    test('Wrong login - null document', () => expect(getLoginServer(nullDocumentUser)).toBe(InvalidDocument))
  });

