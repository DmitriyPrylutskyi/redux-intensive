// Core
import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from 'config';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';

export function* callUpdateAvatarWorker ({ payload: [avatar] }) {
    try {
        yield put(uiActions.setProfileFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));
        const body = yield new FormData();

        yield call([body, body.append], 'avatar', avatar);
        // то-же самое что body.append('avatar', avatar);

        const response = yield call(fetch, `${api}/image`, {
            method:  'POST',
            headers: {
                Authorization: token,
            },
            body,
        });

        const {
            data: { avatar: newAvatar },
            message,
        } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.updateAvatar(newAvatar));
        yield put(actions.reset('forms.user.profile.avatar'));
    } catch (error) {
        yield put(uiActions.emitError(error, 'update profile worker'));
    } finally {
        yield put(uiActions.setProfileFetchingState(false));
    }
}
