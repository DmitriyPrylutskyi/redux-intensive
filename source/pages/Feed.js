// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { Spinner, Catcher, Posts, Notifications, Navigation } from 'components';

// Instruments
import { postsActions } from 'bus/posts/actions';
import { postsActionsAsync } from 'bus/posts/saga/asyncActions';
import { usersActionsAsync } from 'bus/users/saga/asyncActions';

const mapState = (state) => {
    return {
        isPostsFetching: state.ui.get('isPostsFetching'),
        posts:           state.posts,
        profile:         state.profile,
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                ...postsActions,
                ...postsActionsAsync,
                ...usersActionsAsync,
            },
            dispatch,
        ),
    };
};

@connect(
    mapState,
    mapDispatch,
)
export default class Feed extends Component {
    render () {
        const { actions, isPostsFetching, profile, posts } = this.props;

        return (
            <>
                <Spinner isSpinning = { isPostsFetching } />
                <Navigation />
                <Notifications />
                <Catcher>
                    <Posts actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}
