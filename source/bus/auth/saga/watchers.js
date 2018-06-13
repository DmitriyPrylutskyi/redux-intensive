// Core
import { all, takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './asyncTypes';

// Workers
import { callInitializeWorker } from './workers/initialize';
import { callLoginWorker } from './workers/login';
import { callAuthenticateWorker } from './workers/authenticate';
import { callSignupWorker } from './workers/signup';
import { callLogoutWorker } from './workers/logout';

function* watchInitialize () {
    yield takeEvery(asyncTypes.INITIALIZE_ASYNC, callInitializeWorker);
}
function* watchLogin () {
    yield takeEvery(asyncTypes.LOGIN_ASYNC, callLoginWorker);
}
function* watchAuthenticate () {
    yield takeEvery(asyncTypes.AUTHENTICATE_ASYNC, callAuthenticateWorker);
}
function* watchSignup () {
    yield takeEvery(asyncTypes.SIGNUP_ASYNC, callSignupWorker);
}
function* watchLogout () {
    yield takeEvery(asyncTypes.LOGOUT_ASYNC, callLogoutWorker);
}

export function* watchAuth () {
    yield all([
        watchInitialize(),
        watchLogin(),
        watchAuthenticate(),
        watchSignup(),
        watchLogout()
    ]);
}
