// Core
import { combineForms } from 'react-redux-form';

// Instruments
import { token } from 'config';

export const formsReducer = combineForms(
    {
        signup: {
            firstName: 'Dima',
            lastName:  'Vakatsiienko',
            email:     'test1@email.com',
            password:  '12345',
            invite:    token,
        },
        login: {
            email:    'test1@email.com',
            password: '12345',
            remember: true,
        },
        user: {
            profile: {
                firstName: '',
                lastName:  '',
                avatar:    [],
            },
            password: {
                oldPassword: '',
                newPassword: '',
            },
        },
    },
    'forms',
);
