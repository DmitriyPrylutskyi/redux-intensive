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
                            placeholder = 'Имя'
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
                            placeholder = 'Фамилия'
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
                            placeholder = 'Почта'
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
                            placeholder = 'Пароль'
                            type = 'password'
                            validators = { {
                                valid: (password) => !validateLength(password, 5),
                            } }
                        />
                        <button
                            className = { buttonStyle }
                            disabled = { isFetching }
                            type = 'submit'>
                            {isFetching ? 'Загрузка...' : 'Создать аккаунт ✓'}
                        </button>
                    </div>
                </div>
            </Form>
        );
    }
}
