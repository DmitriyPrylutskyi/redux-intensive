// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

// Instruments
import { store, history } from './init/store';
import './theme/init';

// Main
import Main from './navigation/Main';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <Main />
        </Router>
    </Provider>,
    document.getElementById('app'),
);

// // Intro
// import Gallery from './intro';
// import { store } from './intro/redux/store';

// render(
//     <Provider store = { store }>
//         <Gallery />
//     </Provider>,
//     document.getElementById('app'),
// );
