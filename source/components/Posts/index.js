// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as reduxFormActions } from 'react-redux-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Instruments
import Styles from './styles.m.css';
import { postsActionsAsync } from '../../bus/posts/saga/asyncActions';
import { usersActionsAsync } from '../../bus/users/saga/asyncActions';

// Components
import { Composer, Catcher, Post } from '../../components';

const mapState = (state) => {
    return {
        profile: state.profile,
        posts:   state.posts,
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(
            { ...postsActionsAsync, ...usersActionsAsync, ...reduxFormActions },
            dispatch,
        ),
    };
};

@connect(
    mapState,
    mapDispatch,
)
export default class Posts extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
        actions.fetchUsersAsync();
    }

    render () {
        const { actions, posts: postsData, profile } = this.props;

        const posts = postsData.map((post) => {
            return (
                <CSSTransition
                    classNames = { {
                        enter:       Styles.postInStart,
                        enterActive: Styles.postInEnd,
                        exit:        Styles.postOutStart,
                        exitActive:  Styles.postOutEnd,
                    } }
                    key = { post.get('id') }
                    timeout = { { enter: 400, exit: 500 } }>
                    <Catcher>
                        <Post
                            actions = { actions }
                            author = { post.get('author') }
                            comment = { post.get('comment') }
                            created = { post.get('created') }
                            id = { post.get('id') }
                            likes = { post.get('likes') }
                            profile = { profile }
                        />
                    </Catcher>
                </CSSTransition>
            );
        });

        return (
            <section className = { Styles.posts }>
                <Composer
                    actions = { actions }
                    createPostAsync = { actions.createPostAsync }
                    profile = { profile }
                />
                <TransitionGroup>{posts}</TransitionGroup>
            </section>
        );
    }
}
