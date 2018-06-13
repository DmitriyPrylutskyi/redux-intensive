// Core
import { all, takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './asyncTypes';
import { callFetchUsersWorker } from './workers/fetchUsers';

function* watchFetchUsers () {
    yield takeEvery(asyncTypes.FETCH_USERS_ASYNC, callFetchUsersWorker);
}

export function* watchUsers () {
    yield all([watchFetchUsers()]);
}
