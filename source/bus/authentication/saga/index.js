// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from 'bus/authentication/types';
import { callSignupWorker } from './workers/signup';
import { callLoginWorker } from './workers/login';
import { callAuthenticateWorker } from './workers/authenticate';
import { callLogoutWorker } from './workers/logout';

export const authWatchers = Object.freeze({
    * watchSignup () {
        yield takeEvery(types.SIGNUP, callSignupWorker);
    },
    * watchLogin () {
        yield takeEvery(types.LOGIN, callLoginWorker);
    },
    * watchAuthenticate () {
        yield takeEvery(types.AUTHENTICATE, callAuthenticateWorker);
    },
    * watchLogout () {
        yield takeEvery(types.LOGOUT, callLogoutWorker);
    },
});
