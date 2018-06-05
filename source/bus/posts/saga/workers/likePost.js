// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import { api } from 'config';
import { uiActions } from 'bus/ui/actions';
import { postsActions } from 'bus/posts/actions';

export function* callLikePostWorker ({ payload: postId }) {
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

        const liker = yield select((state) =>
            state.profile.removeAll(['avatar', 'token']),
        );

        yield put(postsActions.likePost({ liker, postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'likePostWorker'));
    } finally {
        yield put(uiActions.setPostsFetchingState(false));
    }
}
