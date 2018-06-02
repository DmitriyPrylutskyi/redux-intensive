// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import './theme/init';
import { store } from './init/store';

// Main
import App from './pages/Feed';

render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('app'),
);
