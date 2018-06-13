// Core
import { profileActions } from '../actions';

describe('profile actions:', () => {
    test('fillProfile snapshot', () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot();
    });

    test('updateAvatar snapshot', () => {
        expect(profileActions.updateAvatar(__.url)).toMatchSnapshot();
    });

    test('clearProfile snapshot', () => {
        expect(profileActions.clearProfile()).toMatchSnapshot();
    });
});
