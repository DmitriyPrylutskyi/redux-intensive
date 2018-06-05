// Core
import { put } from 'redux-saga/effects';

// Instruments
import { authActions } from 'bus/authentication/actions';
import { uiActions } from 'bus/ui/actions';

export function* callInitializeWorker () {
    const token = yield localStorage.getItem('token');

    if (token) {
        yield put(authActions.authenticate(token));

        return null;
    }

    yield put(uiActions.initializeSuccess());
}
