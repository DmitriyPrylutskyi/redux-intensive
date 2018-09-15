// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

// Store
import { store } from '../../init/store';

// Actions
import { showNextPhoto } from '../../bus/gallery/actions';

@hot(module)
export default class Gallery extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    _showNextPhoto = () => {
        store.dispatch(showNextPhoto());
    };

    render() {
        const { gallery } = store.getState();
        const { url } = gallery.photos.find(
            (_, photoIndex) => photoIndex === gallery.selectedPhotoIndex,
        );

        const buttonActiveStyle1 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 0,
        });
        const buttonActiveStyle2 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 1,
        });
        const buttonActiveStyle3 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 2,
        });
        const buttonActiveStyle4 = cx({
            [Styles.buttonActive]: gallery.selectedPhotoIndex === 3,
        });

        return (
            <section className={Styles.gallery}>
                <img src={url} />
                <div>
                    <button>←</button>
                    <button className={buttonActiveStyle1} value="0">
                        1
                    </button>
                    <button className={buttonActiveStyle2} value="1">
                        2
                    </button>
                    <button className={buttonActiveStyle3} value="2">
                        3
                    </button>
                    <button className={buttonActiveStyle4} value="3">
                        4
                    </button>
                    <button onClick={this._showNextPhoto}>→</button>
                </div>
            </section>
        );
    }
}
