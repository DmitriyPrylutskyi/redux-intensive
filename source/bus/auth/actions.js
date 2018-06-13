// Types
import { types } from './types';

export const authActions = Object.freeze({
    initialize: () => ({
        type: types.INITIALIZE,
    }),
    authenticate: () => ({
        type: types.AUTHENTICATE,
    }),
    logout: () => ({
        type: types.LOGOUT,
    }),
});
