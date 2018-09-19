// Core
import React, { Component } from 'react';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

// Store
import { store } from '../init/store';

// Actions
import { showSelectedImage } from '../bus/gallery/actions';

export class Button extends Component {
    _showSelectedImage = () => {
        store.dispatch(showSelectedImage(this.props.currentImageIndex));
    };

    render() {
        const { selectedImageIndex, currentImageIndex } = this.props;

        const buttonActiveStyle = cx({
            [ Styles.buttonActive ]: selectedImageIndex === currentImageIndex,
        });

        return (
            <button
                className = { buttonActiveStyle }
                onClick = { this._showSelectedImage }>
                {currentImageIndex + 1}
            </button>
        );
    }
}
