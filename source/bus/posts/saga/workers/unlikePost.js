// Core
import { put, take, select, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../../posts/actions';
import { asyncTypes } from '../asyncTypes';

export function* callUnlikePostWorker () {
    while (true) {
        try {
            const { payload: postID } = yield take(
                asyncTypes.UNLIKE_POST_ASYNC,
            );

            yield put(uiActions.setFetchingState(true));

            const response = yield apply(api, api.posts.like, [postID]);

            if (response.status !== 204) {
                const { message } = yield apply(response, response.json);

                throw new Error(message);
            }

            const userID = yield select((state) => state.profile.get('id'));

            yield put(postsActions.unlikePost({ postID, userID }));
        } catch (error) {
            yield put(uiActions.emitError(error, 'unlike post worker'));
        } finally {
            yield put(uiActions.setFetchingState(false));
        }
    }
}
