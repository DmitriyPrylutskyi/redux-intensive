// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* callUpdateNameWorker ({ payload: { firstName, lastName }}) {
    try {
        yield put(uiActions.setFetchingState(true));

        const response = yield apply(api, api.profile.updateInfo, [
            {
                firstName,
                lastName,
            }
        ]);

        const { data: userProfile, message } = yield apply(
            response,
            response.json,
        );

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(userProfile));
    } catch (error) {
        yield put(uiActions.emitError(error, 'update profile worker'));
    } finally {
        yield put(uiActions.setFetchingState(false));
    }
}
