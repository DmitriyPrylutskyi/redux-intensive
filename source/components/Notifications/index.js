// Core
import React from 'react';
import { connect } from 'react-redux';

// Instruments
import { notificationsActions } from 'bus/notifications/actions';

// Components
import Notification from 'components/Notification';

const Notifications = ({ notifications, hideNotification }) =>
    notifications.map((notification) => (
        <Notification
            hideNotification = { hideNotification }
            key = { notification.id }
            { ...notification }
        />
    ));

const mapState = (state) => {
    return {
        notifications: state.notifications,
    };
};

const mapActions = {
    hideNotification: notificationsActions.hideNotification,
};

export default connect(
    mapState,
    mapActions,
)(Notifications);
