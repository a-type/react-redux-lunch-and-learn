import React, { Component } from 'react';

export default class ProfileName extends Component {
    render () {
        const { title } = this.props;
        return (
            <div className='profile-title profile-component'>
                <div className='component-name'>ProfileTitle.jsx</div>
                <div className='title'>Title: {title}</div>
            </div>
        );
    }
}