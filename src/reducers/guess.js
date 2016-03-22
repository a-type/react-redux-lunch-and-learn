import { MAKE_GUESS, SET_VALUE } from '../constants/ActionTypes';

let initialState = {
    value: '4',
    message: 'Make a guess.',
    lastGuess: 'none',
    totalGuesses: 0,
    won: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MAKE_GUESS:
            let nextState = { ...state, lastGuess: action.guess };
            if (isNaN(parseFloat(action.guess))) {
                return {
                    ...nextState,
                    message: 'That\'s not a number.',
                    won: false
                };
            }
            else if (action.guess === state.value) {
                return {
                    ...nextState,
                    message: 'Correct! Game reset.',
                    won: true,
                    totalGuesses: state.totalGuesses + 1,
                    value: '' + action.potentialNext
                };
            }
            else if (action.guess > state.value) {
                return {
                    ...nextState,
                    message: 'Too high!',
                    won: false
                };
            }
            else {
                return {
                    ...nextState,
                    message: 'Too low!',
                    won: false
                }
            }
        case SET_VALUE:
            return {
                ...state,
                value: '' + action.value,
                won: false
            };
        default:
            return state;
    }
}