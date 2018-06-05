// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import { api } from 'config';
import { uiActions } from 'bus/ui/actions';
import { usersActions } from 'bus/users/actions';

export function* callFetchUsersWorker () {
    try {
        yield put(uiActions.setPostsFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/user/all`, {
            method:  'GET',
            headers: {
                Authorization: token,
            },
        });

        const { data: users, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(usersActions.fillUsers(users));
    } catch (error) {
        yield put(uiActions.emitError(error, 'Fetch users worker'));
    } finally {
        yield put(uiActions.setPostsFetchingState(true));
    }
}
