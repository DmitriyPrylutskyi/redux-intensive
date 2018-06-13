// Types
import { types } from './types';

export const postsActions = Object.freeze({
    fillPosts: (posts) => ({
        type:    types.FILL_POSTS,
        payload: posts,
    }),
    createPost: (post) => ({
        type:    types.CREATE_POST,
        payload: post,
    }),
    removePost: (postId) => ({
        type:    types.REMOVE_POST,
        payload: postId,
    }),
    likePost: (likedPostIDs) => ({
        type:    types.LIKE_POST,
        payload: likedPostIDs,
    }),
    unlikePost: (unlikedPostIDs) => ({
        type:    types.UNLIKE_POST,
        payload: unlikedPostIDs,
    }),
    clearPosts: () => ({
        type: types.CLEAR_POSTS,
    }),
});
