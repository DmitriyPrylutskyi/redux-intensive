// Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../../auth/actions';
import { profileActions } from '../../../profile/actions';
import { postsActions } from '../../../posts/actions';
import { usersActions } from '../../../users/actions';

export function* callLogoutWorker () {
    try {
        yield put(uiActions.setFetchingState(true));

        const response = yield apply(api, api.auth.logout);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(authActions.logout());
    } catch (error) {
        yield put(uiActions.emitError(error, 'logout worker'));
    } finally {
        yield apply(localStorage, localStorage.removeItem, ['token']);
        yield put(profileActions.clearProfile());
        yield put(postsActions.clearPosts());
        yield put(usersActions.clearUsers());
        yield put(actions.reset('forms.user'));
        yield put(uiActions.setFetchingState(false));
    }
}
