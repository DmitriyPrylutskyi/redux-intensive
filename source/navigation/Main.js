// Core
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { hot } from 'react-hot-loader';

// Instruments
import { socketActions } from '../bus/socket/actions';
import { authActionsAsync } from '../bus/auth/saga/asyncActions';
import { socket, joinSocketChannel } from '../init/socket';

// Routing
import Public from './Public';
import Private from './Private';

// Components
import { Nav, Notification, Loading, Spinner } from '../components';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized:   state.auth.get('isInitialized'),
    };
};

const mapDispatchToProps = {
    initializeAsync:  authActionsAsync.initializeAsync,
    listenConnection: socketActions.listenConnection,
    listenPosts:      socketActions.listenPosts,
};

@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
@hot(module)
export default class Main extends Component {
    componentDidMount () {
        const { initializeAsync, listenConnection } = this.props;

        joinSocketChannel();
        listenConnection();
        initializeAsync();
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return (
            <>
                <Nav location = { this.props.location } />
                <Notification />
                <Spinner />
                <Switch>
                    {isAuthenticated && <Private listenPosts = { listenPosts } />}
                    <Public />
                </Switch>
            </>
        );
    }
}
