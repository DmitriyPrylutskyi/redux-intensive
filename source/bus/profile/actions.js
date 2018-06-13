// Types
import { types } from './types';

export const profileActions = Object.freeze({
    fillProfile: (user) => ({
        type:    types.FILL_PROFILE,
        payload: user,
    }),
    updateAvatar: (avatarUrl) => ({
        type:    types.UPDATE_AVATAR,
        payload: avatarUrl,
    }),
    clearProfile: () => ({
        type: types.CLEAR_PROFILE,
    }),
});
