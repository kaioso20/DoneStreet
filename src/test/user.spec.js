'use strict';

const { Login, NotFound } = require('../languages/Translations/enUS');
const { getUserServer } = require('../service/userService');
const { correctUser } = require('./mock/loginMock')

describe('Users', () => {
		
		it('id do usuário indo vazio', () =>
    expect(getUserServer({userDoc: null})).toMatchObject(Login.InvalidUser));
		
		it('id do usuário inexistente', () =>
    expect(getUserServer({userDoc : 999999999})).toMatchObject(NotFound));
		
		it('id do usuário existente', () =>
    expect(getUserServer({ userDoc: correctUser.documentNumber })).toHaveProperty('documentNumber'))
});
