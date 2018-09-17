// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { authenticate } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* signupWorker(action) {
    try {
        yield put(startFetching());

        const profile = yield apply(api, api.auth.signup, [ action.payload ]);

        console.log('→ profile', profile);

        yield apply(localStorage, localStorage.setItem, [
            'token',
            profile.token,
        ]);

        yield put(authenticate());
    } catch (error) {
        console.log('signupWorker', error);
    } finally {
        yield put(stopFetching());
    }
}
