// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { authenticate, initialize } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';
import { fillProfile } from '../../../profile/actions';

export function* authenticateWorker() {
    try {
        yield put(startFetching());

        const token = yield apply(localStorage, localStorage.getItem, [ 'token' ]);

        const profile = yield apply(api, api.auth.login, [{ token }]);

        yield put(authenticate());
        yield put(fillProfile(profile));
    } catch (error) {
        console.log('authenticateWorker', error);
    } finally {
        yield put(stopFetching());
        yield put(initialize());
    }
}
