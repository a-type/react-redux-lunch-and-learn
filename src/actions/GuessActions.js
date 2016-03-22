import { MAKE_GUESS, SET_VALUE } from '../constants/ActionTypes';

export function makeGuess (guess, potentialNext) {
    return {
        type: MAKE_GUESS,
        guess,
        potentialNext
    };
}

export function setValue (value) {
    return {
        type: SET_VALUE,
        value
    }
}