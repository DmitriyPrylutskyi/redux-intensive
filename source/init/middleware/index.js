// Core
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Instruments
import { customThunk } from './customThunk';
import { notifications } from './notifications';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});
const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
    customThunk,
    routerMiddleware,
    notifications
];

if (__DEV__) {
    middleware.push(logger);
}

export { middleware, sagaMiddleware, history };
