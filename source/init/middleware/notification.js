// Instruments
import { notificationsActions } from 'bus/notifications/actions';

export const notification = (store) => (next) => (action) => {
    if (action.error) {
        // console.log(action.payload);
        store.dispatch(notificationsActions.showNotification(action.payload));
    }

    return next(action);
};
