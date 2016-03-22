import React from 'react';
import ProfileApp from '../../containers/ProfileApp';

export default { content: (
    <div className='split-slide slide-light'>
        <h2 className='slide-title'>Performance</h2>
        <div className='split-content'>
            <ProfileApp />
            <ul>
                <li>DOM rendering is heavy</li>
                <li>DOM simulator</li>
                <li>only render what you need to!</li>
            </ul>
        </div>
    </div>
)

}