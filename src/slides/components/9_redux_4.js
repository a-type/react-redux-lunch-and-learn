import React from 'react';

let imageStyle = {
    width: '240px',
    height: 'auto',
    transform: 'translate(0,20%)'
}

export default { content: (
    <div className='basic-slide'>
        <h2 className='slide-title'>Games as reducers</h2>
        <div>
            <h2><code>reduce( <img style={imageStyle} src='src/images/cloud1.png'/>, {'{ type: \'jump\' }'})
            =>{' '} 
            <img style={imageStyle} src='src/images/cloud2.png'/>
            </code></h2>
        </div>
    </div>
), theme: 'light' }