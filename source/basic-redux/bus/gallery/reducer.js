// Images
import image1 from '../../../theme/assets/images/1.jpeg';
import image2 from '../../../theme/assets/images/2.jpeg';
import image3 from '../../../theme/assets/images/3.jpeg';
import image4 from '../../../theme/assets/images/4.jpeg';

// Types
import {
    SHOW_NEXT_IMAGE,
    SHOW_PREVIOUS_IMAGE,
    SHOW_SELECTED_IMAGE,
} from './types';

const initialState = {
    images: [
        { id: '123', url: image1 },
        { id: '456', url: image2 },
        { id: '789', url: image3 },
        { id: '987', url: image4 },
    ],
    selectedImageIndex: 0,
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NEXT_IMAGE:
            if (state.selectedImageIndex === state.images.length - 1) {
                return state;
            }

            return {
                ...state,
                selectedImageIndex: state.selectedImageIndex + 1,
            };

        case SHOW_PREVIOUS_IMAGE:
            if (state.selectedImageIndex === 0) {
                return state;
            }

            return {
                ...state,
                selectedImageIndex: state.selectedImageIndex - 1,
            };

        case SHOW_SELECTED_IMAGE:
            return {
                ...state,
                selectedImageIndex: action.payload,
            };

        default:
            return state;
    }
};
