// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from 'bus/ui/types';
import { callInitializeWorker } from './workers/initialize';

export const uiWatchers = Object.freeze({
    * watchInitialize () {
        yield takeEvery(types.INITIALIZE, callInitializeWorker);
    },
});
