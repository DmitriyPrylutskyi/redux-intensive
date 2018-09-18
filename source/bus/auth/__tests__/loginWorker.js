// Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

// Instruments
import { api } from '../../../API';
import { authenticate, loginAsync } from '../actions';
import { startFetching, stopFetching } from '../../ui/actions';
import { fillProfile } from '../../profile/actions';

// Worker
import { loginWorker } from '../saga/workers/loginWorker';

const action = loginAsync(__.credentials);

describe('loginWorker saga:', () => {
    test('should complete scenario', async () => {
        await expectSaga(loginWorker, action)
            .provide([[ apply(api, api.auth.login, [ __.credentials ]), __.userProfile ]])
            .put(startFetching())
            .apply(api, api.auth.login, [ __.credentials ])
            .apply(localStorage, localStorage.setItem, [ 'remember', true ])
            .apply(localStorage, localStorage.setItem, [
                'token',
                __.userProfile.token,
            ])
            .put(authenticate())
            .put(fillProfile(__.userProfile))
            .put(stopFetching())
            .run();
    });
});
