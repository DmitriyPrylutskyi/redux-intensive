// Instruments
import { authActionsAsync } from '../saga/asyncActions';
import { asyncTypes } from '../saga/asyncTypes';

describe('auth actions async', () => {
    test('initialize async', () => {
        expect(authActionsAsync.initializeAsync()).toEqual({
            type: asyncTypes.INITIALIZE_ASYNC,
        });
    });

    test('login async ', () => {
        expect(authActionsAsync.loginAsync(__.credentials)).toEqual({
            type:    asyncTypes.LOGIN_ASYNC,
            payload: __.credentials,
        });
    });

    test('authenticate async ', () => {
        expect(authActionsAsync.authenticateAsync(__.token)).toEqual({
            type:    asyncTypes.AUTHENTICATE_ASYNC,
            payload: __.token,
        });
    });

    test('signup async ', () => {
        expect(authActionsAsync.signupAsync(__.userProfile)).toEqual({
            type:    asyncTypes.SIGNUP_ASYNC,
            payload: __.userProfile,
        });
    });

    test('logout async ', () => {
        expect(authActionsAsync.logoutAsync()).toEqual({
            type: asyncTypes.LOGOUT_ASYNC,
        });
    });
});
