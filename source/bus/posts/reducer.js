// Core
import { List, Map } from 'immutable';

// Instruments
import { types } from './types';

const initialState = List([
    Map({
        id:      '123',
        created: 124857189213,
        likes:   List([]),
        author:  Map({
            firstName: 'Jack',
            lastName:  'Herer',
            avatar:
                'http://i0.kym-cdn.com/entries/icons/original/000/000/774/lime-cat.jpg',
        }),
    })
]);

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};
