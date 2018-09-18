// Reducer
import { uiReducer } from '../reducer';

// Actions
import * as uiActions from '../actions';

describe('ui reducer:', () => {
    test('should return state by default', () => {
        expect(uiReducer(void 0, { type: 'TEST_ACTION' })).toMatchSnapshot();
    });
});
