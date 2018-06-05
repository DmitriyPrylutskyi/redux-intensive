// Core
import { cloneableGenerator } from 'redux-saga/utils';

// Instruments
import { authActions } from 'bus/authentication/actions';
import { callAuthenticateWorker } from '../saga/workers/authenticate';

const authenticateAction = authActions.authenticate(__.token);
const saga = cloneableGenerator(callAuthenticateWorker)(authenticateAction);

describe('authenticate saga', () => {
    test('should yield fetch', () => {
        expect(saga.next().value).toMatchSnapshot();
    });

    test('should handle 401 response status', () => {
        const clone = saga.clone();

        localStorage.setItem('token', __.token);

        // should yield transformed data
        expect(clone.next(__.fetchResponseFail).value).toMatchSnapshot();

        // should yield delay
        expect(clone.next(__.responseDataFail).value).toMatchSnapshot();

        // should remove token from localStorage
        expect(clone.next().value).toBeUndefined();
        expect(localStorage.getItem('token')).toBeNull();

        // should call INITIALIZE_SUCCESS
        expect(clone.next().value).toMatchSnapshot();

        // should finish with null
        expect(clone.next().value).toBeNull();
        expect(clone.next().done).toBe(true);
    });

    test('should handle !== 200 response status', () => {
        const clone = saga.clone();

        const responseStatus400 = { ...__.fetchResponseFail, status: 400 };

        // should yield transformed data
        expect(clone.next(responseStatus400).value).toMatchSnapshot();

        // should yield delay
        expect(clone.next(__.responseDataFail).value).toMatchSnapshot();

        // should put authenticateFail
        expect(clone.next().value).toMatchSnapshot();

        // should put initializeSuccess
        expect(clone.next().value).toMatchSnapshot();

        // should finish
        expect(clone.next().done).toBe(true);
    });

    test('should complete successfully', () => {
        // should yield transformed json
        expect(saga.next(__.fetchResponseSuccess).value).toMatchSnapshot();

        // should yield delay
        expect(saga.next(__.responseDataSuccess).value).toMatchSnapshot();

        // should yield authenticateSuccess
        expect(saga.next().value).toMatchSnapshot();

        // should yield fillProfile
        expect(saga.next().value).toMatchSnapshot();

        // should yield react-redux-form change to forms.user.profile.firstName
        expect(saga.next().value).toMatchSnapshot();

        // should yield react-redux-form change to forms.user.profile.lastName
        expect(saga.next().value).toMatchSnapshot();

        // should yield initialize
        expect(saga.next().value).toMatchSnapshot();

        // should finish
        expect(saga.next().done).toBe(true);
    });
});
