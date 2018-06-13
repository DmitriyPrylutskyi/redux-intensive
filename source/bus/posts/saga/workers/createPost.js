// Core
import { put, take, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../../posts/actions';
import { asyncTypes } from '../asyncTypes';

export function* callCreatePostWorker () {
    while (true) {
        try {
            const { payload: comment } = yield take(
                asyncTypes.CREATE_POST_ASYNC,
            );

            yield put(uiActions.setFetchingState(true));

            const response = yield apply(api, api.posts.create, [comment]);

            const { data: post, message } = yield apply(
                response,
                response.json,
            );

            if (response.status !== 200) {
                throw new Error(message);
            }

            yield put(postsActions.createPost(post));
        } catch (error) {
            yield put(uiActions.emitError(error, 'create post worker'));
        } finally {
            yield put(uiActions.setFetchingState(false));
        }
    }
}
