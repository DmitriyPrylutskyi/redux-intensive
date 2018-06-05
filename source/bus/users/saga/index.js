// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './asyncTypes';
import { callFetchUsersWorker } from './workers/fetchUsers';

export const usersWatchers = Object.freeze({
    * watchFetchUsers () {
        yield takeEvery(asyncTypes.FETCH_USERS_ASYNC, callFetchUsersWorker);
    },
});
