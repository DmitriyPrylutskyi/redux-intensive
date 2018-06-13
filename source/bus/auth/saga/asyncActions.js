// Core
import { asyncTypes } from './asyncTypes';

export const authActionsAsync = Object.freeze({
    initializeAsync: () => ({
        type: asyncTypes.INITIALIZE_ASYNC,
    }),
    loginAsync: (credentials) => ({
        type:    asyncTypes.LOGIN_ASYNC,
        payload: credentials,
    }),
    authenticateAsync: () => ({
        type: asyncTypes.AUTHENTICATE_ASYNC,
    }),
    signupAsync: (userData) => ({
        type:    asyncTypes.SIGNUP_ASYNC,
        payload: userData,
    }),
    logoutAsync: () => ({
        type: asyncTypes.LOGOUT_ASYNC,
    }),
});
