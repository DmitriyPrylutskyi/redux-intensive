//Coret
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { book } from '../../navigation/book';
import { authActionsAsync } from '../../bus/auth/saga/asyncActions';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        profile:         state.profile,
        isOnline:        state.ui.get('isOnline'),
    };
};

@connect(
    mapStateToProps,
    { logoutAsync: authActionsAsync.logoutAsync },
)
export default class Nav extends Component {
    _getOnlineStatus = () => {
        const { isOnline } = this.props;
        const statusStyle = cx(Styles.status, {
            [Styles.online]:  isOnline,
            [Styles.offline]: !isOnline,
        });

        return (
            <div className = { statusStyle }>
                <div>{isOnline ? 'Online' : 'Offline'}</div>
                <span />
            </div>
        );
    };
    _getNav = () => {
        const { isAuthenticated, profile } = this.props;

        const onlineStatus = this._getOnlineStatus();

        return isAuthenticated ?
            <>
                {onlineStatus}
                <NavLink activeClassName = { Styles.active } to = { book.profile }>
                    <img src = { profile.get('avatar') } />
                    {profile.get('firstName')}
                </NavLink>
                <NavLink activeClassName = { Styles.active } to = { book.feed }>
                    Feed
                </NavLink>
                <button onClick = { this._logout }>Log Out</button>
            </>
            :
            <>
                {onlineStatus}
                <NavLink activeClassName = { Styles.active } to = { book.login }>
                    Log In
                </NavLink>
                <NavLink activeClassName = { Styles.active } to = { book.signUp }>
                    Sign Up
                </NavLink>
            </>
        ;
    };

    _logout = () => {
        this.props.logoutAsync();
    };

    render () {
        const navigation = this._getNav();

        return <section className = { Styles.navigation }>{navigation}</section>;
    }
}
