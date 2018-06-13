// Types
import { asyncTypes } from './asyncTypes';

export const profileActionsAsync = Object.freeze({
    updateNameAsync: (newName) => ({
        type:    asyncTypes.UPDATE_NAME_ASYNC,
        payload: newName,
    }),
    updateAvatarAsync: (avatar) => ({
        type:    asyncTypes.UPDATE_AVATAR_ASYNC,
        payload: avatar,
    }),
    updatePasswordAsync: (newPassword) => ({
        type:    asyncTypes.UPDATE_PASSWORD_ASYNC,
        payload: newPassword,
    }),
});
