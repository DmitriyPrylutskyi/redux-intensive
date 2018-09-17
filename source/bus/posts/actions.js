// Types
import { types } from './types';

// Async
export const fetchPostsAsync = () => {
    return {
        type: types.FETCH_POSTS_ASYNC,
    };
};
export const likePostAsync = (postId) => {
    return {
        type:    types.LIKE_POST_ASYNC,
        payload: postId,
    };
};

export const unlikePostAsync = (postId) => {
    return {
        type:    types.UNLIKE_POST_ASYNC,
        payload: postId,
    };
};

// Sync
export const fillPosts = (posts) => {
    return {
        type:    types.FILL_POSTS,
        payload: posts,
    };
};

export const likePost = (likedPostData) => {
    return {
        type:    types.LIKE_POST,
        payload: likedPostData,
    };
};

export const unlikePost = (unlikedPostData) => {
    return {
        type:    types.UNLIKE_POST,
        payload: unlikedPostData,
    };
};
