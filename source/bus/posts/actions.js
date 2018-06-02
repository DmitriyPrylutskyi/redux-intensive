// Instruments
import { types } from './types';

export const postsActions = Object.freeze({
    fetchPosts: () => ({
        type: types.FETCH_POSTS,
    }),
    fetchPostsSuccess: () => ({
        type: types.FETCH_POSTS_SUCCESS,
    }),
    fetchPostsFail: () => ({
        type: types.FETCH_POSTS_FAIL,
    }),
});
