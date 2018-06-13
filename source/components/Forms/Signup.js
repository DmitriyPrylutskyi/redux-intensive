// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-redux-form';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { authActionsAsync } from '../../bus/auth/saga/asyncActions';
import { validateEmail, validateLength } from '../../instruments/validators';

// Components
import { Input } from '../../components';

const mapState = (state) => {
    return {
        isFetching: state.ui.get('isFetching'),
    };
};

const mapDispatch = {
    signupAsync: authActionsAsync.signupAsync,
};

@connect(
    mapState,
    mapDispatch,
)
export default class SignupForm extends Component {
    _submitSignupForm = (user) => {
        this.props.signupAsync(user);
    };

    render () {
        const { isFetching } = this.props;

        const buttonStyle = cx(Styles.signupSubmit, {
            [Styles.disabledButton]: isFetching,
        });

        const centeredWrapperStyle = cx(Styles.wrapper, Styles.centered);

        return (
            <Form
                className = { Styles.form }
                model = 'forms.signup'
                onSubmit = { this._submitSignupForm }>
                <div className = { centeredWrapperStyle }>
                    <div>
                        <Input
                            disabled = { isFetching }
                            disabledStyle = { Styles.disabledInput }
                            id = 'forms.signup.firstName'
                            invalidStyle = { Styles.invalid }
                            model = 'forms.signup.firstName'
                            placeholder = 'First name'
                            type = 'text'
                            validators = { {
                                valid: (firstName) =>
                                    !validateLength(firstName, 1),
                            } }
                        />
                        <Input
                            disabled = { isFetching }
                            disabledStyle = { Styles.disabledInput }
                            id = 'forms.signup.lastName'
                            invalidStyle = { Styles.invalid }
                            model = 'forms.signup.lastName'
                            placeholder = 'Last name'
                            type = 'text'
                            validators = { {
                                valid: (lastName) => !validateLength(lastName, 1),
                            } }
                        />
                        <Input
                            disabled = { isFetching }
                            disabledStyle = { Styles.disabledInput }
                            id = 'forms.signup.email'
                            invalidStyle = { Styles.invalid }
                            model = 'forms.signup.email'
                            placeholder = 'Email'
                            type = 'text'
                            validators = { {
                                valid: (email) => validateEmail(email),
                            } }
                        />
                        <Input
                            disabled = { isFetching }
                            disabledStyle = { Styles.disabledInput }
                            id = 'forms.signup.password'
                            invalidStyle = { Styles.invalid }
                            model = 'forms.signup.password'
                            placeholder = 'Password'
                            type = 'password'
                            validators = { {
                                valid: (password) => !validateLength(password, 5),
                            } }
                        />
                        <Input
                            disabled = { isFetching }
                            disabledStyle = { Styles.disabledInput }
                            id = 'forms.signup.invite'
                            invalidStyle = { Styles.invalid }
                            model = 'forms.signup.invite'
                            placeholder = 'Invite key'
                            type = 'password'
                            validators = { {
                                valid: (invite) =>
                                    !validateLength(invite, 12, 12),
                            } }
                        />
                        <button
                            className = { buttonStyle }
                            disabled = { isFetching }
                            type = 'submit'>
                            {isFetching ? 'Working...' : 'Create Account ✓'}
                        </button>
                    </div>
                </div>
            </Form>
        );
    }
}
