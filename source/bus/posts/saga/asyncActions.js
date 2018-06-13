// Core
import { asyncTypes } from './asyncTypes';

export const postsActionsAsync = Object.freeze({
    fetchPostsAsync: () => ({
        type: asyncTypes.FETCH_POSTS_ASYNC,
    }),
    createPostAsync: (comment) => ({
        type:    asyncTypes.CREATE_POST_ASYNC,
        payload: comment,
    }),
    removePostAsync: (postId) => ({
        type:    asyncTypes.REMOVE_POST_ASYNC,
        payload: postId,
    }),
    likePostAsync: (postID) => ({ // В лайках — писать айди большими буквами
        type:    asyncTypes.LIKE_POST_ASYNC,
        payload: postID,
    }),
    unlikePostAsync: (postID) => ({
        type:    asyncTypes.UNLIKE_POST_ASYNC,
        payload: postID,
    }),
});
