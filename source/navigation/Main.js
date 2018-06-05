// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { hot } from 'react-hot-loader';

// Routes
import Private from './Private';
import Public from './Public';

// Components
import { Loading } from 'components';

// Instruments
import { uiActions } from 'bus/ui/actions';
import { socketActions } from 'bus/socket/actions';
import { joinSocketChannel } from 'init/socket';
import { socket } from 'init/socket';

const mapState = (state) => {
    return {
        isAuthenticated: state.authentication.get('isAuthenticated'),
        isInitialized:   state.ui.get('isInitialized'),
    };
};

const mapActions = {
    initialize: uiActions.initialize,
    ...socketActions,
};

@hot(module)
@withRouter
@connect(
    mapState,
    mapActions,
)
export default class Main extends Component {
    componentDidMount () {
        const { initialize, listenConnection } = this.props;

        initialize();
        joinSocketChannel();
        listenConnection();
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;

        return (
            <Switch>
                {!isInitialized && <Loading />}
                {isAuthenticated && <Private listenPosts = { listenPosts } />}
                <Public />
            </Switch>
        );
    }
}
