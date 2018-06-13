// Instruments
import { authActions } from '../actions';
import { types } from '../types';

describe('auth actions', () => {
    test('authenticate', () => {
        expect(authActions.authenticate()).toEqual({
            type: types.AUTHENTICATE,
        });
    });

    test('initialize', () => {
        expect(authActions.initialize()).toEqual({
            type: types.INITIALIZE,
        });
    });

    test('logout', () => {
        expect(authActions.logout()).toEqual({
            type: types.LOGOUT,
        });
    });
});
