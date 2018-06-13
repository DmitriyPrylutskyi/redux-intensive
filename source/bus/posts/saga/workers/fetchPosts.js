// Core
import { put, take, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../../posts/actions';
import { asyncTypes } from '../asyncTypes';

export function* callFetchPostsWorker () {
    while (true) {
        try {
            yield take(asyncTypes.FETCH_POSTS_ASYNC);
            yield put(uiActions.setFetchingState(true));

            const response = yield apply(api, api.posts.fetch);

            const { data: posts, message } = yield apply(
                response,
                response.json,
            );

            if (response.status !== 200) {
                throw new Error(message);
            }

            yield put(postsActions.fillPosts(posts));
        } catch (error) {
            yield put(uiActions.emitError(error, 'fetch posts worker'));
        } finally {
            yield put(uiActions.setFetchingState(false));
        }
    }
}
