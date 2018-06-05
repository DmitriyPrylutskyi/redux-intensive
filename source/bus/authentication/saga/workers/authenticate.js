// Core
import { call, put, delay } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from 'config';
import { authActions } from 'bus/authentication/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';

export function* callAuthenticateWorker ({ payload: token }) {
    try {
        const response = yield call(fetch, `${api}/user/login`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        const { data: profile, message } = yield call([
            response,
            response.json
        ]);


        yield delay(500);

        if (response.status !== 200) {
            if (response.status === 401) {
                yield localStorage.removeItem('token');

                return null;
            }

            throw new Error(message);
        }

        yield put(authActions.authenticateSuccess());
        yield put(profileActions.fillProfile(profile));
        yield put(
            actions.change('forms.user.profile.firstName', profile.firstName),
        );
        yield put(
            actions.change('forms.user.profile.lastName', profile.lastName),
        );
    } catch (error) {
        yield put(authActions.authenticateFail(error));
    } finally {
        yield put(uiActions.initializeSuccess());
    }
}
