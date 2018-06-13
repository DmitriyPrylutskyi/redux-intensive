// Core
import { combineForms } from 'react-redux-form';

export const formsReducer = combineForms(
    {
        login: {
            email:    'dima1@dima1.com',
            password: '12345',
            remember: true,
        },
        signup: {
            firstName: '',
            lastName:  '',
            email:     '',
            password:  '',
            invite:    'akI2Kynnvwic',
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
        feed: {
            comment: '',
        },
    },
    'forms',
);
