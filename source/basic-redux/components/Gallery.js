// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';

// Components
import { Button } from './Button';

// Instruments
import Styles from './styles.m.css';

// Store
import { store } from '../init/store';

// Actions
import { showNextImage, showPreviousImage } from '../bus/gallery/actions';

@hot(module)
export class Gallery extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _showNextImage = () => {
        store.dispatch(showNextImage());
    };

    _showPreviousImage = () => {
        store.dispatch(showPreviousImage());
    };

    render() {
        const {
            gallery: { images, selectedImageIndex },
        } = store.getState();

        const { url: selectedImageUrl } = images.find(
            (_, index) => index === selectedImageIndex,
        );

        const buttons = images.map((image, currentImageIndex) => (
            <Button
                key={image.id}
                currentImageIndex={currentImageIndex}
                selectedImageIndex={selectedImageIndex}
            />
        ));

        return (
            <section className={Styles.gallery}>
                <img src={selectedImageUrl} />
                <div>
                    <button onClick={this._showPreviousImage}>←</button>
                    {buttons}
                    <button onClick={this._showNextImage}>→</button>
                </div>
            </section>
        );
    }
}
