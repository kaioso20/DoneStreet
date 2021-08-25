'use strict';

const { Login, NotFound } = require('../languages/Translations/enUS');
const { getUserServer } = require('../service/userService');
const { correctUser } = require('./mock/loginMock')

describe('Users', () => {
		
		it('userDoc empty', () =>
    expect(getUserServer({userDoc: null})).toMatchObject(Login.InvalidUser));
		
		it('userDoc wrong', () =>
    expect(getUserServer({userDoc : 999999999})).toMatchObject(NotFound));
		
		it('Correct userDoc', () =>
    expect(getUserServer({ userDoc: correctUser.documentNumber })).toHaveProperty('documentNumber'))
});
