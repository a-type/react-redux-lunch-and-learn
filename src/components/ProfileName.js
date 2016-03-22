import React, { Component } from 'react';

export default class ProfileName extends Component {
    render () {
        const { name } = this.props;
        let className = 'profile-name profile-component';
        // some logic for demonstration purposes
        if (name !== 'John Doe') {
            className += ' changed';
        }
        return (
            <div className={className}>
                <div className='component-name'>ProfileName.jsx</div>
                <div className='name'>Name: {name}</div>
            </div>
        );
    }
}