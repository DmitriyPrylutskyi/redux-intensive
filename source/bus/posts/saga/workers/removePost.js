// Core
import { put, take, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../../posts/actions';
import { asyncTypes } from '../asyncTypes';

export function* callRemovePostWorker () {
    while (true) {
        try {
            const { payload: id } = yield take(asyncTypes.REMOVE_POST_ASYNC);

            yield put(uiActions.setFetchingState(true));

            const response = yield apply(api, api.posts.remove, [id]);

            if (response.status !== 204) {
                const { message } = yield apply(response, response.json);

                throw new Error(message);
            }

            yield put(postsActions.removePost(id));
        } catch (error) {
            yield put(uiActions.emitError(error, 'remove post worker'));
        } finally {
            yield put(uiActions.setFetchingState(false));
        }
    }
}
