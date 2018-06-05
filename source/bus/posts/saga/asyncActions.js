// Core
import { asyncTypes } from './asyncTypes';

export const postsActionsAsync = Object.freeze({
    createPostAsync: (comment) => ({
        type:    asyncTypes.CREATE_POST_ASYNC,
        payload: comment,
    }),
    removePostAsync: (id) => ({
        type:    asyncTypes.REMOVE_POST_ASYNC,
        payload: id,
    }),
    likePostAsync: (postId) => ({
        type:    asyncTypes.LIKE_POST_ASYNC,
        payload: postId,
    }),
    unlikePostAsync: (postId) => ({
        type:    asyncTypes.UNLIKE_POST_ASYNC,
        payload: postId,
    }),
});
