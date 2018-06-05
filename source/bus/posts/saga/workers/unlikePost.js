// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import { api } from 'config';
import { uiActions } from 'bus/ui/actions';
import { postsActions } from 'bus/posts/actions';

export function* callUnlikePostWorker ({ payload: postId }) {
    try {
        yield put(uiActions.setPostsFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/feed/like/${postId}`, {
            method:  'PUT',
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        const likerId = yield select((state) => state.profile.get('id'));

        yield put(postsActions.unlikePost({ likerId, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'unlikePostWorker'));
    } finally {
        yield put(uiActions.setPostsFetchingState(false));
    }
}
