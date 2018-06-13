// Core
import { Map } from 'immutable';

// Instruments
import { uiReducer } from '../reducer';
import { uiActions } from '../actions';

const initialState = Map({
    notification: Map({
        id:      '123',
        type:    'error',
        message: 'Fetch posts fail',
        source:  'fetch posts worker',
    }),
    isOnline:   false,
    isFetching: false,
});

describe('ui reducer:', () => {
    test(`should return initial state by default`, () => {
        expect(uiReducer(void 0, {})).toMatchSnapshot();
    });

    test('should handle setFetchingState action', () => {
        expect(
            uiReducer(void 0, uiActions.setFetchingState(true)),
        ).toMatchSnapshot();
    });

    test('should handle showNotification action', () => {
        expect(
            uiReducer(void 0, uiActions.showNotification('Login success!')),
        ).toMatchSnapshot();
    });

    test('should handle hideNotification action', () => {
        expect(
            uiReducer(initialState, uiActions.hideNotification()),
        ).toMatchSnapshot();
    });

    test('should handle setOnlineState action', () => {
        expect(
            uiReducer(void 0, uiActions.setOnlineState(true)),
        ).toMatchSnapshot();
    });
});
