// Instruments
import { uiActions } from '../../bus/ui/actions';

export const notifications = (store) => (next) => (action) => {
    if (action.error) {
        store.dispatch(
            uiActions.showNotification(
                action.payload.message,
                'error',
                action.meta,
            ),
        );
    }

    next(action);
};
