// Instruments
import { types } from './types';

export const postsActions = Object.freeze({
    fetchPosts: () => ({
        type: types.FETCH_POSTS,
    }),
    fetchPostsSuccess: (posts) => ({
        type:    types.FETCH_POSTS_SUCCESS,
        payload: posts,
    }),
    fetchPostsFail: (error) => ({
        type:    types.FETCH_POSTS_FAIL,
        payload: error,
        error:   true,
    }),

    createPost: (post) => ({
        type:    types.CREATE_POST,
        payload: post,
    }),
    removePost: (id) => ({
        type:    types.REMOVE_POST,
        payload: id,
    }),
    likePost: (likedPostIds) => ({
        type:    types.LIKE_POST,
        payload: likedPostIds,
    }),
    unlikePost: (unlikedPostIds) => ({
        type:    types.UNLIKE_POST,
        payload: unlikedPostIds,
    }),
});
