// Core
import { cloneableGenerator } from 'redux-saga/utils';

// Instruments
import { callInitializeWorker } from '../saga/workers/initialize';

const saga = cloneableGenerator(callInitializeWorker)();
const clone = saga.clone();

describe('initialize saga:', () => {
    describe('should authenticate if localStorage contains a token', () => {
        localStorage.setItem('token', __.token);

        test('should extract a token from localStorage', () => {
            expect(clone.next().value).toMatchSnapshot();
        });

        test('should call authenticateAsync action', () => {
            expect(clone.next(__.token).value).toMatchSnapshot();
        });

        test('should finish', () => {
            const finish = clone.next();

            expect(finish.value).toBeNull();
            expect(finish.done).toBe(true);
        });
    });

    describe('should initialize if localStorage does not contain a token', () => {
        test('should yield extract a token from localStorage', () => {
            localStorage.removeItem('token');
            expect(saga.next().value).toMatchSnapshot();
        });

        test('should dispatch initialize action', () => {
            expect(saga.next().value).toMatchSnapshot();
        });

        test('should finish', () => {
            expect(saga.next().done).toBe(true);
        });
    });
});
