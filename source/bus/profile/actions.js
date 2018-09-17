// Types
import { types } from './types';

// Sync
export const fillProfile = (profile) => {
    return {
        type:    types.FILL_PROFILE,
        payload: profile,
    };
};

export const clearProfile = () => {
    return {
        type: types.CLEAR_PROFILE,
    };
};
