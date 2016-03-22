import React, { Component } from 'react';
import ProfileName from './ProfileName';
import ProfileTitle from './ProfileTitle';

export default class Profile extends Component {
    handleClick (event) {
        this.props.setName('Grant Forrest');
    }

    render () {
        const { name, title } = this.props;
        let className = 'profile';
        // some logic for demonstration purposes
        if (name !== 'John Doe') {
            className += ' changed';
        }
        return (
            <div className='profile-demo'>
                <div className={className}>
                    <div className='component-name'>Profile.jsx {'{ name, title }'}</div>
                    <ProfileName name={name}/>
                    <ProfileTitle title={title}/>
                </div>
                <div className='profile-controls'>
                    <button className='change-name' onClick={(e) => this.handleClick(e)}>Change Name</button>
                </div>
            </div>
        );
    }
}