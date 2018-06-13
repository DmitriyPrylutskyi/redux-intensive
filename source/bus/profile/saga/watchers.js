// Core
import { all, takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './asyncTypes';
import { callUpdateNameWorker } from './workers/updateName';
import { callUpdateAvatarWorker } from './workers/updateAvatar';
import { callChangePasswordWorker } from './workers/changePassword';

function* watchUpdateName () {
    yield takeEvery(asyncTypes.UPDATE_NAME_ASYNC, callUpdateNameWorker);
}
function* watchUpdateAvatar () {
    yield takeEvery(asyncTypes.UPDATE_AVATAR_ASYNC, callUpdateAvatarWorker);
}
function* watchChangePassword () {
    yield takeEvery(asyncTypes.UPDATE_PASSWORD_ASYNC, callChangePasswordWorker);
}

export function* watchProfile () {
    yield all([watchUpdateName(), watchUpdateAvatar(), watchChangePassword()]);
}
