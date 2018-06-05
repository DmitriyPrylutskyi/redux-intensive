export const customThunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
};

export function customThunk1 (store) {
    return function (next) {
        return function (action) {
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            }

            return next(action);
        };
    };
}
