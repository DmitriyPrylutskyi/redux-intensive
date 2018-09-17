// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { fillPosts } from '../../actions';
import { startFetching, stopFetching } from '../../../ui/actions';

export function* fetchPostsWorker() {
    yield put(startFetching());

    const posts = yield apply(api, api.posts.get, [ 2, 3 ]);
    yield put(fillPosts(posts));

    yield put(stopFetching());
}
