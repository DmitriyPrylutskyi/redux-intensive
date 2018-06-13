// Core
import { profileActionsAsync } from '../saga/asyncActions';

describe('profile actions async :', () => {
    test('updateNameAsync snapshot', () => {
        expect(
            profileActionsAsync.updateNameAsync(__.userProfile),
        ).toMatchSnapshot();
    });

    test('updateAvatar snapshot', () => {
        expect(
            profileActionsAsync.updateAvatarAsync(__.userProfile),
        ).toMatchSnapshot();
    });

    test('updatePasswordAsync snapshot', () => {
        expect(
            profileActionsAsync.updatePasswordAsync(__.userProfile),
        ).toMatchSnapshot();
    });
});
