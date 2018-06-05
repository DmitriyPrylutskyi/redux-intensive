// Core
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';

// Instruments
import { api } from 'config';
import { authActions } from 'bus/authentication/actions';
import { uiActions } from 'bus/ui/actions';
import { profileActions } from 'bus/profile/actions';
import { book } from 'navigation/book';
import { callLoginWorker } from '../saga/workers/login';

const url = `${api}/user/login`;
const loginAction = authActions.login(__.credentials);

const saga = cloneableGenerator(callLoginWorker)(loginAction);

describe('login saga', () => {
    test('should dispatch SET_AUTH_FETCHING action', () => {
        expect(saga.next().value).toEqual(
            put(uiActions.setAuthFetchingState(true)),
        );
    });

    test('should call fetch request', () => {
        expect(saga.next().value).toEqual(
            call(fetch, url, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(__.credentials),
            }),
        );
    });

    test('should handle !== 200 response status', () => {
        const clone = saga.clone();

        expect(clone.next(__.fetchResponseFail).value).toEqual(
            call([__.fetchResponseFail, __.fetchResponseFail.json]),
        );

        expect(clone.next(__.responseDataFail).value).toEqual(
            put(authActions.loginFail(__.error)),
        );

        expect(clone.next().value).toEqual(
            put(uiActions.setAuthFetchingState(false)),
        );

        expect(clone.next().done).toBe(true);
    });

    test('fetch request should complete successfully', () => {
        expect(saga.next(__.fetchResponseSuccess).value).toEqual(
            call([__.fetchResponseSuccess, __.fetchResponseSuccess.json]),
        );
    });

    test('localStorage should contain a token', () => {
        expect(saga.next(__.responseDataSuccess).value).toBeUndefined();
        expect(localStorage.getItem('token')).toBe(JSON.stringify(__.token));
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });

    test('should dispatch LOGIN_SUCCESS', () => {
        expect(saga.next().value).toEqual(put(authActions.loginSuccess()));
    });

    test('should dispatch FILL_PROFILE', () => {
        expect(saga.next().value).toEqual(
            put(profileActions.fillProfile(__.userProfile)),
        );
    });

    test('should call reacrt-router REPLACE', () => {
        expect(saga.next().value).toEqual(put(replace(book.feed)));
    });

    test('should call react-redux-form RESET', () => {
        expect(saga.next().value).toEqual(put(actions.reset('forms.login')));
    });

    test('should call SET_AUTH_FETCHING_STATE', () => {
        expect(saga.next().value).toEqual(
            put(uiActions.setAuthFetchingState(false)),
        );
    });

    test('should finish', () => {
        expect(saga.next().done).toBe(true);
    });
});
