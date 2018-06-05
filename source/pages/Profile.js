// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    ProfileForm
} from 'components';

// Instruments
import { uiActions } from 'bus/ui/actions';
import { profileActionsAsync } from 'bus/profile/saga/asyncActions';

const mapState = (state) => {
    return {
        profile:           state.profile,
        isProfileFetching: state.ui.get('isProfileFetching'),
        isProfileEditing:  state.ui.get('isProfileEditing'),
        isAvatarFetching:  state.ui.get('isAvatarFetching'),
    };
};

const mapActions = {
    updateProfileAsync:     profileActionsAsync.updateProfileAsync,
    setProfileEditingState: uiActions.setProfileEditingState,
};

@connect(
    mapState,
    mapActions,
)
export default class Profile extends Component {
    render () {
        const { isProfileFetching, isAvatarFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isProfileFetching || isAvatarFetching } />
                <Navigation />
                <Catcher>
                    <ProfileForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
