import React, { Component } from 'react';

export default class JumpTo extends Component {
    render () {
        const { setSlide } = this.props;
        return (
            <div className='jump-to'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSlide(this.refs.input.value);
                }}>
                    <input ref='input' />
                </form>
            </div>
        );  
    }
}