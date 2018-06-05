import { profileReducer } from '../reducer';
import { profileActions } from '../actions';

describe('profile reducer', () => {
    test('should return initial state', () => {
        expect(profileReducer(void 0, { type: '@@INIT' })).toMatchSnapshot();
    });

    test('should handle FILL_PROFILE', () => {
        expect(
            profileReducer(void 0, profileActions.fillProfile(__.userProfile)),
        ).toMatchSnapshot();
    });

    test('should handle CLEAR_PROFILE', () => {
        expect(
            profileReducer(void 0, profileActions.clearProfile()),
        ).toMatchSnapshot();
    });

    test('should handle UPDATE_PROFILE', () => {
        expect(
            profileReducer(void 0, profileActions.updateAvatar([])),
        ).toMatchSnapshot();
    });
});
