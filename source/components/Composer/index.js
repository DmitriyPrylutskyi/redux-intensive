// Core
import React, { Component } from 'react';
import { Form, Control } from 'react-redux-form';

// Instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
    _submitComment = (formData) => {
        this._createPost(formData);
    };

    _createPost = ({ comment }) => {
        if (!comment) {
            return;
        }

        this.props.createPostAsync(comment);
    };

    _handleTextareaKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.form.submit();
            this.props.actions.reset('forms.feed');
        }
    };

    render () {
        const { profile } = this.props;

        return (
            <section className = { Styles.composer }>
                <img src = { profile.get('avatar') } />
                <Form
                    getRef = { (form) => this.form = form }
                    model = 'forms.feed'
                    onSubmit = { this._submitComment }>
                    <Control.textarea
                        model = 'forms.feed.comment'
                        placeholder = { `What's on your mind, ${profile.get(
                            'firstName',
                        )}?` }
                        onKeyPress = { this._handleTextareaKeyPress }
                    />
                    <input type = 'submit' value = 'Post' />
                </Form>
            </section>
        );
    }
}
