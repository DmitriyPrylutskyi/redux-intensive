// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    SignupForm
} from 'components';

// Instruments
import { authActions } from 'bus/authentication/actions';

const mapState = (state) => {
    return {
        isAuthFetching: state.ui.get('isAuthFetching'),
    };
};

const mapActions = {
    signup: authActions.signup,
};

@connect(
    mapState,
    mapActions,
)
export default class Signup extends Component {
    render () {
        const { isAuthFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isAuthFetching } />
                <Navigation />
                <Catcher>
                    <SignupForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
