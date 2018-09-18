// Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../API';
import { authenticate } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';
import { fillProfile } from '../../../profile/actions';

export function* loginWorker(action) {
    try {
        yield put(startFetching());

        const profile = yield apply(api, api.auth.login, [ action.payload ]);

        if (action.payload.remember) {
            yield apply(localStorage, localStorage.setItem, [ 'remember', true ]);
        }
        yield apply(localStorage, localStorage.setItem, [
            'token',
            profile.token,
        ]);
        const { firstName, lastName } = profile;
        yield put(
            actions.merge('forms.user.profile', {
                firstName,
                lastName,
            }),
        );

        yield put(authenticate());
        yield put(fillProfile(profile));
    } catch (error) {
        console.log('loginWorker', error);
    } finally {
        yield put(stopFetching());
    }
}
