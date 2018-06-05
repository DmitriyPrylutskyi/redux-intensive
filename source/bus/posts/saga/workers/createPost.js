// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import { api } from 'config';
import { uiActions } from 'bus/ui/actions';
import { postsActions } from 'bus/posts/actions';

export function* callCreatePostWorker ({ payload: comment }) {
    try {
        yield put(uiActions.setPostsFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/feed`, {
            method:  'POST',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment }),
        });

        const { data: post, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.createPost(post));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createPostWorker'));
    } finally {
        yield put(uiActions.setPostsFetchingState(false));
    }
}
