import React, { Component } from 'react';

const LIMIT = 10;

// TODO: change to Math.floor(Math.random() * LIMIT);
let getRandomNumber = () => {
    return 4; // chosen by fair dice roll.
              // guaranteed to be random.
}

class Guess extends Component {
    render () {
        const { message, makeGuess, lastGuess, won, setValue, totalGuesses } = this.props;
        const submit = (e) => {
            e.preventDefault();
            e.stopPropagation();
            makeGuess(this.refs.input.value, getRandomNumber());
            this.refs.input.value = '';
            this.refs.input.focus();
        };

        return (
            <div className='guess'>
                <div className='guess-info'>
                    <span className='guess-message'>{message}{' '}</span>
                    <span className='guess-lastguess'>last guess: {lastGuess}, wins: {totalGuesses}</span>
                </div>
                <form onSubmit={submit}>
                    <input ref='input' className='guess-input' placeholder={`between 1 and ${LIMIT}`}/>
                    <button className='guess-button' onClick={submit}>Guess</button>
                </form>
            </div>
        );
    }
}

export default Guess;