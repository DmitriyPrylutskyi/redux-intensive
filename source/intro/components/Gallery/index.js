// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { changePhoto } from '../../redux/actions';

class Gallery extends Component {
    _showNextPhoto = () => {
        const { currentPhoto } = this.props;

        console.log('→ currentPhoto', currentPhoto);

        this.props.changePhoto(currentPhoto + 1);
    };

    _showPrevPhoto = () => {
        const { currentPhoto } = this.props;

        this.props.changePhoto(currentPhoto - 1);
    };

    render () {
        const { currentPhoto, photos } = this.props;

        const url = photos[currentPhoto].url;

        return (
            <section className = { Styles.gallery }>
                <img src = { url } />
                <div>
                    <button onClick = { this._showPrevPhoto }>←</button>
                    <button onClick = { this._showNextPhoto }>→</button>
                </div>
            </section>
        );
    }
}

const mapState = (photos) => photos;

const mapDispatch = {
    changePhoto,
};

export default connect(
    mapState,
    mapDispatch,
)(Gallery);
