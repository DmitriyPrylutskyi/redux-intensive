// Instruments
import { CHANGE_PHOTO } from './types';

export const changePhoto = (photo) => ({
    type:    CHANGE_PHOTO,
    payload: photo,
});
