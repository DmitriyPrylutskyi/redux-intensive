// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import { api } from 'config';
import { uiActions } from 'bus/ui/actions';
import { postsActions } from 'bus/posts/actions';

export function* callRemovePostWorker ({ payload: id }) {
    try {
        yield put(uiActions.setPostsFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/feed/${id}`, {
            method:  'DELETE',
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        yield put(postsActions.removePost(id));
    } catch (error) {
        yield put(uiActions.emitError(error, 'removePostWorker'));
    } finally {
        yield put(uiActions.setPostsFetchingState(false));
    }
}
