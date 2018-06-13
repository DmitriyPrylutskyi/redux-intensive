// Core
import { all, call } from 'redux-saga/effects';

// Instruments
import { watchAuth } from '../bus/auth/saga/watchers';
import { watchUsers } from '../bus/users/saga/watchers';
import { watchProfile } from '../bus/profile/saga/watchers';
import { watchPosts } from '../bus/posts/saga/watchers';

export function* rootSaga () {
    yield all([
        // Pulling approach using «take» effect
        call(watchPosts),

        // Pushing approach suing «takeEvery» effect
        call(watchAuth),
        call(watchUsers),
        call(watchProfile)
    ]);
}
