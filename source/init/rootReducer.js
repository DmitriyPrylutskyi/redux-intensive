// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Instruments
import { postsReducer as posts } from 'bus/posts/reducer';
import { notificationsReducer as notifications } from 'bus/notifications/reducer';
import { uiReducer as ui } from 'bus/ui/reducer';
import { authReducer as authentication } from 'bus/authentication/reducer';
import { profileReducer as profile } from 'bus/profile/reducer';
import { formsReducer as forms } from 'bus/forms/reducer';
import { usersReducer as users } from 'bus/users/reducer';

export const rootReducer = combineReducers({
    posts,
    notifications,
    ui,
    router,
    authentication,
    profile,
    forms,
    users,
});
