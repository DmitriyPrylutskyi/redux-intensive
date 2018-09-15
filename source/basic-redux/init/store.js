// Core
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// Reducer
import { rootReducer } from './rootReducer';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue';
        },
        prevState: () => 'dodgerblue',
        action:    () => 'greenyellow',
        nextState: () => 'olivedrab',
        error:     () => 'firebrick',
    },
});

export const store = createStore(rootReducer, applyMiddleware(logger));
