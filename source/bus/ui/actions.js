// Types
import { types } from './types';

// Sync
export const startFetching = () => {
    return {
        type: types.START_FETCHING,
    };
};

export const stopFetching = () => {
    return {
        type: types.STOP_FETCHING,
    };
};

export const setOnlineState = () => {
    return {
        type: types.SET_ONLINE_STATE,
    };
};

export const setOfflineState = () => {
    return {
        type: types.SET_OFFLINE_STATE,
    };
};
