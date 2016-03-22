import React, { Component } from 'react';
import { connect } from 'react-redux';
import Deck from '../components/Deck';
import * as SlideActions from '../actions/SlideActions';

const mapStateToProps = (state) => {
    return {
        currentSlide: state.currentSlide
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nextSlide: () => {
            dispatch(SlideActions.nextSlide());
        },
        
        prevSlide: () => {
            dispatch(SlideActions.prevSlide());
        },
        
        setSlide: (slide) => {
            dispatch(SlideActions.setSlide(slide));
        }
    };
};

const SlidesApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Deck);

export default SlidesApp