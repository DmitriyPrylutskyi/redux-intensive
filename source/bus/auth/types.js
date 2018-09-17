export const types = Object.freeze({
    // Async
    SIGNUP_ASYNC:       'SIGNUP_ASYNC', // ✓
    AUTHENTICATE_ASYNC: 'AUTHENTICATE_ASYNC', // ✓ JWT-token
    LOGIN_ASYNC:        'LOGIN_ASYNC', // ✓ credentials
    LOGOUT_ASYNC:       'LOGOUT_ASYNC', //
    INITIALIZE_ASYNC:   'INITIALIZE_ASYNC', // ✓

    // Sync
    AUTHENTICATE: 'AUTHENTICATE', // ✓
    LOGOUT:       'LOGOUT', //
    INITIALIZE:   'INITIALIZE', // ✓
});
