// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    LoginForm
} from 'components';

// Instruments
import { authActions } from 'bus/authentication/actions';

const mapState = (state) => {
    return {
        isAuthFetching: state.ui.get('isAuthFetching'),
    };
};

const mapActions = {
    login: authActions.login,
};

@connect(
    mapState,
    mapActions,
)
export default class Login extends Component {
    render () {
        const { isAuthFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isAuthFetching } />
                <Navigation />
                <Catcher>
                    <LoginForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
