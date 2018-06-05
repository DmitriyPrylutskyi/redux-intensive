// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    NewPasswordForm
} from 'components';

// Instruments
import { uiActions } from 'bus/ui/actions';
import { profileActionsAsync } from 'bus/profile/saga/asyncActions';

const mapState = (state) => {
    return {
        isProfileFetching: state.ui.get('isProfileFetching'),
        isPasswordEditing: state.ui.get('isPasswordEditing'),
    };
};

const mapActions = {
    updateProfileAsync:      profileActionsAsync.updateProfileAsync,
    setPasswordEditingState: uiActions.setPasswordEditingState,
};

@connect(
    mapState,
    mapActions,
)
export default class NewPassword extends Component {
    render () {
        const { isProfileFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isProfileFetching } />
                <Navigation />
                <Catcher>
                    <NewPasswordForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
