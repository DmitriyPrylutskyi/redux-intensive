// Core
import { put, apply, call } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../API';
import { fillPosts } from '../../actions';

console.log('→ api', api);

export function* fetchPostsWorker() {
    console.log('→ start spinner');

    // const posts = yield call([ api, api.posts.get ], 2, 3);

    const posts = yield apply(api, api.posts.get, [ 2, 3 ]);
    yield put(fillPosts(posts));

    console.log('→ posts', posts);
    // Side effects...
    console.log('→ stop spinner');
}
