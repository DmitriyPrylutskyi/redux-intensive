// Instruments
import { authActions } from '../actions';
import { types } from '../types';

describe('auth actions:', () => {
    describe('login:', () => {
        test('LOGIN', () => {
            expect(authActions.login(__.credentials)).toEqual({
                type:    types.LOGIN,
                payload: __.credentials,
            });
        });
        test('LOGIN_SUCCESS', () => {
            expect(authActions.loginSuccess()).toEqual({
                type: types.LOGIN_SUCCESS,
            });
        });
        test('LOGIN_FAIL', () => {
            expect(authActions.loginFail(__.error)).toEqual({
                type:    types.LOGIN_FAIL,
                payload: __.error,
                error:   true,
            });
        });
    });
});
