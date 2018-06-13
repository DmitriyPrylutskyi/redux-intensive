// Core
import { all } from 'redux-saga/effects';

// Workers
import { callFetchPostsWorker } from './workers/fetchPosts';
import { callCreatePostWorker } from './workers/createPost';
import { callRemovePostWorker } from './workers/removePost';
import { callLikePostWorker } from './workers/likePost';
import { callUnlikePostWorker } from './workers/unlikePost';

export function* watchPosts () {
    yield all([
        callFetchPostsWorker(),
        callCreatePostWorker(),
        callRemovePostWorker(),
        callLikePostWorker(),
        callUnlikePostWorker()
    ]);
}
