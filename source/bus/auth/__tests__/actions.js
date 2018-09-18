// Actions
import * as actions from '../actions';

// Types
import { types } from '../types';

describe('auth actions:', () => {
    test('signupAsync', () => {
        expect(actions.signupAsync(__.userProfile)).toEqual({
            type:    types.SIGNUP_ASYNC,
            payload: __.userProfile,
        });
    });

    test('loginAsync', () => {
        expect(actions.loginAsync(__.credentials)).toEqual({
            type:    types.LOGIN_ASYNC,
            payload: __.credentials,
        });
    });
});
