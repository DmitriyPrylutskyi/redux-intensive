// Core
import { all } from 'redux-saga/effects';

// Instruments
import { postsWatchers } from 'bus/posts/saga';
import { authWatchers } from 'bus/authentication/saga';
import { uiWatchers } from 'bus/ui/saga';
import { usersWatchers } from 'bus/users/saga';
import { profileWatchers } from 'bus/profile/saga';

export function* rootSaga () {
    yield all([
        postsWatchers.watchFetchPosts(),
        postsWatchers.watchCreatePost(),
        postsWatchers.watchRemovePost(),
        postsWatchers.watchLikePost(),
        postsWatchers.watchUnlikePost(),
        authWatchers.watchSignup(),
        authWatchers.watchLogin(),
        authWatchers.watchAuthenticate(),
        authWatchers.watchLogout(),
        uiWatchers.watchInitialize(),
        usersWatchers.watchFetchUsers(),
        profileWatchers.watchUpdateProfile(),
        profileWatchers.watchUpdateAvatar()
    ]);
}
