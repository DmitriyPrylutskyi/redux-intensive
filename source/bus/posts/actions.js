// Types
import { types } from './types';

// Async
export const fetchPostsAsync = () => {
    return {
        type: types.FETCH_POSTS_ASYNC,
    };
};

// Sync
export const fillPosts = (posts) => {
    return {
        type:    types.FILL_POSTS,
        payload: posts,
    };
};
