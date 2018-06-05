// Core
import { Map } from 'immutable';

// Instruments
import { types } from './types';

const initialState = Map({
    isOnline:          false,
    isInitialized:     false,
    isPostsFetching:   false,
    isAuthFetching:    false,
    isProfileFetching: false,
    isProfileEditing:  false,
    isPasswordEditing: false,
    isAvatarFetching:  false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ONLINE_STATE:
            return state.set('isOnline', action.payload);

        case types.SET_PASSWORD_EDITING_STATE:
            return state.set('isPasswordEditing', action.payload);

        case types.INITIALIZE_SUCCESS:
            return state.set('isInitialized', true);

        case types.SET_POSTS_FETCHING_STATE:
            return state.set('isPostsFetching', action.payload);

        case types.SET_AUTH_FETCHING_STATE:
            return state.set('isAuthFetching', action.payload);

        case types.SET_PROFILE_FETCHING_STATE:
            return state.set('isProfileFetching', action.payload);

        case types.SET_AVATAR_FETCHING_STATE:
            return state.set('isAvatarFetching', action.payload);

        case types.SET_PROFILE_EDITING_STATE:
            return state.set('isProfileEditing', action.payload);

        default:
            return state;
    }
};
