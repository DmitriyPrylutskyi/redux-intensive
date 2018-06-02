// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';

// Components
import { Spinner, Catcher, Posts } from 'components';

// Instruments
import { postsActions } from 'bus/posts/actions';

const mapState = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                fetchPosts: postsActions.fetchPosts,
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
    static defaultProps = {
        isFeedFetching: false,
        profile:        fromJS({
            id:     '123',
            avatar:
                'http://i0.kym-cdn.com/entries/icons/original/000/000/774/lime-cat.jpg',
            firstName: 'Cat',
        }),
        actions: {
            fetchPosts: () => {},
            fetchUsers: () => {},
            createPost: () => {},
        },
    };

    render () {
        const { actions, isFeedFetching, profile, posts } = this.props;

        return (
            <>
                <Spinner isSpinning = { isFeedFetching } />
                <Catcher>
                    <Posts actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}
