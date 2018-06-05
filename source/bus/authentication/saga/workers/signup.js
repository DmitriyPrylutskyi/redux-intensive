// Core
import { call, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';

// Instruments
import { api, groupID } from 'config';
import { authActions } from 'bus/authentication/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';
import { book } from 'navigation/book';

export function* callSignupWorker ({ payload: credentials }) {
    try {
        yield put(uiActions.setAuthFetchingState(true));

        const response = yield call(fetch, `${api}/user/${groupID}`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const { data: profile, message } = yield call([
            response,
            response.json
        ]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield localStorage.setItem('token', profile.token);

        yield put(authActions.signupSuccess());
        yield put(profileActions.fillProfile(profile));
        yield put(replace(book.feed));
        yield put(actions.reset('forms.signup'));
    } catch (error) {
        yield put(authActions.signupFail(error));
    } finally {
        yield put(uiActions.setAuthFetchingState(false));
    }
}
