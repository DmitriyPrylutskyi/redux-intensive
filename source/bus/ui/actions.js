// Instruments
import { types } from './types';

export const uiActions = Object.freeze({
    emitError: (error, meta = null) => ({
        type:    types.EMIT_ERROR,
        payload: error,
        error:   true,
        meta,
    }),
    initialize: () => ({
        type: types.INITIALIZE,
    }),
    initializeSuccess: () => ({
        type: types.INITIALIZE_SUCCESS,
    }),
    setPostsFetchingState: (postsFetchingState) => ({
        type:    types.SET_POSTS_FETCHING_STATE,
        payload: postsFetchingState,
    }),
    setAuthFetchingState: (authFetchingState) => ({
        type:    types.SET_AUTH_FETCHING_STATE,
        payload: authFetchingState,
    }),
    setOnlineState: (onlineState) => ({
        type:    types.SET_ONLINE_STATE,
        payload: onlineState,
    }),
    setProfileFetchingState: (state) => ({
        type:    types.SET_PROFILE_FETCHING_STATE,
        payload: state,
    }),
    setProfileEditingState: (state) => ({
        type:    types.SET_PROFILE_EDITING_STATE,
        payload: state,
    }),
    setAvatarFetchingState: (state) => ({
        type:    types.SET_AVATAR_EDITING_STATE,
        payload: state,
    }),
    setPasswordEditingState: (state) => ({
        type:    types.SET_PASSWORD_EDITING_STATE,
        payload: state,
    }),
});
