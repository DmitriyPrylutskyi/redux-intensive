// Core
import { call, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';

// Instruments
import { api } from 'config';
import { authActions } from 'bus/authentication/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';
import { book } from 'navigation/book';

export function* callLogoutWorker () {
    try {
        yield put(uiActions.setAuthFetchingState(true));

        const token = yield localStorage.getItem('token');

        console.log('token', token);

        const response = yield call(fetch, `${api}/user/logout`, {
            method:  'GET',
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        yield put(authActions.logoutSuccess());
    } catch (error) {
        yield put(authActions.logoutFail(error));
    } finally {
        yield localStorage.removeItem('token');
        yield put(replace(book.login));
        yield put(actions.reset('forms.profile'));
        yield put(profileActions.clearProfile());
        yield put(uiActions.setAuthFetchingState(false));
    }
}
