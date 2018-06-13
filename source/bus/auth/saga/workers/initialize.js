// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { authActionsAsync } from '../../../auth/saga/asyncActions';
import { authActions } from '../../../auth/actions';

export function* callInitializeWorker () {
    const token = yield apply(localStorage, localStorage.getItem, ['token']);

    if (token) {
        yield put(authActionsAsync.authenticateAsync());

        return null;
    }

    yield put(authActions.initialize());
}
