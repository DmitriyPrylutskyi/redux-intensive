// Core
import { combineReducers } from 'redux';

// Instruments
import { postsReducer as posts } from 'bus/posts/reducer';

export const rootReducer = combineReducers({
    posts,
});
