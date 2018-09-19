// Types
import {
    SHOW_NEXT_IMAGE,
    SHOW_PREVIOUS_IMAGE,
    SHOW_SELECTED_IMAGE,
} from './types';

export const showNextImage = () => {
    return {
        type: SHOW_NEXT_IMAGE,
    };
};

export const showPreviousImage = () => {
    return {
        type: SHOW_PREVIOUS_IMAGE,
    };
};

export const showSelectedImage = (photoIndex) => {
    return {
        type:    SHOW_SELECTED_IMAGE,
        payload: photoIndex,
    };
};
