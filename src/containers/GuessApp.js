import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as GuessActions from '../actions/GuessActions';
import Guess from '../components/Guess';

const mapStateToProps = (state) => {
    return {
        message: state.guess.message,
        lastGuess: state.guess.lastGuess,
        won: state.guess.won,
        totalGuesses: state.guess.totalGuesses
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        makeGuess: (guess, potential) => {
            dispatch(GuessActions.makeGuess(guess, potential));
        },
        setValue: (value) => {
            dispatch(GuessActions.setValue(value));
        }
    };
};

const GuessApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Guess);

export default GuessApp