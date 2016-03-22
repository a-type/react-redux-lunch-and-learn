import React from 'react';
let Highlight = require('react-highlight');

let code = `
<Profile>
    <Icon source={this.state.user.iconSrc} />
    <h2>{this.state.user.username}</h2>
    <Bio text={this.state.user.bio} />
</Profile>

<Icon>
    <img src={this.props.source}/>
</Icon>

<Bio>
    <p>{this.props.text}</p>
</Bio>
`;

export default { content: (<div className='split-slide'>
    <h2 className='slide-title'>Data flows down</h2>
    <div className='split-content'>
        <Highlight className='javascript' innerHtml={true}>
            {code}
        </Highlight>
        <ul>
            <li>Profile state contains & maintains user object</li>
            <li>Profile passes user down to sub-components</li>
        </ul>
    </div>
</div>),
theme: 'light' }