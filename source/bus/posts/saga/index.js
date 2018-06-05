// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from 'bus/posts/types';
import { asyncTypes } from './asyncTypes';
import { callFetchPostsWorker } from './workers/fetchPosts';
import { callCreatePostWorker } from './workers/createPost';
import { callRemovePostWorker } from './workers/removePost';
import { callLikePostWorker } from './workers/likePost';
import { callUnlikePostWorker } from './workers/unlikePost';

export const postsWatchers = Object.freeze({
    * watchFetchPosts () {
        yield takeEvery(types.FETCH_POSTS, callFetchPostsWorker);
    },
    * watchCreatePost () {
        yield takeEvery(asyncTypes.CREATE_POST_ASYNC, callCreatePostWorker);
    },
    * watchRemovePost () {
        yield takeEvery(asyncTypes.REMOVE_POST_ASYNC, callRemovePostWorker);
    },
    * watchLikePost () {
        yield takeEvery(asyncTypes.LIKE_POST_ASYNC, callLikePostWorker);
    },
    * watchUnlikePost () {
        yield takeEvery(asyncTypes.UNLIKE_POST_ASYNC, callUnlikePostWorker);
    },
});
