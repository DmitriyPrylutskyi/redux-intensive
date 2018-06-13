// Core
import { combineForms } from 'react-redux-form';

export const formsReducer = combineForms(
    {
        login: {
            email:    '',
            password: '',
            remember: false,
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
            composer: {
                comment: '',
            },
        },
    },
    'forms',
);
