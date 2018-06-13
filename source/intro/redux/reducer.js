// Instruments
import photo1 from '../../theme/assets/photos/1';
import photo2 from '../../theme/assets/photos/2';
import photo3 from '../../theme/assets/photos/3';
import { CHANGE_PHOTO } from './types';

const initialState = {
    photos: [
        { id: '1', url: photo1 },
        { id: '2', url: photo2 },
        { id: '3', url: photo3 }
    ],
    currentPhoto: 0,
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PHOTO:
            if (state.currentPhoto === 0 && action.payload <= 0) {
                return state;
            }

            if (
                state.currentPhoto === state.photos.length - 1 &&
                action.payload >= state.photos.length
            ) {
                return state;
            }

            return {
                ...state,
                currentPhoto: action.payload,
            };

        default:
            return state;
    }
};
