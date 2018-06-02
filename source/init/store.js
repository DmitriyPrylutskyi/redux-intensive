// Core
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

window.x = compose;

// Instruments
import { rootReducer } from './rootReducer';

const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger)),
);
