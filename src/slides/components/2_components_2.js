import React from 'react';

let Highlight = require('react-highlight');

let code = `
class Profile extends Component {
    getInitialState () {
        return { user: null };
    }

    componentDidMount () {
        let user = await sdk.getUser();
        this.setState({ user: user });
    }

    render () {
        const user = this.state.user;
        return (<div>
            <Icon source={user ? user.iconSrc : ''} />
            <h2>{user ? user.username : 'Loading...'}</h2>
            <Bio text={user ? user.bio : ''} />
        </div>);
    }
}
`;

export default { content: (
    <div className='split-slide slide-light'>
        <h2 className='slide-title'>Component structure</h2>
        <div className='split-content'>
            <Highlight className='javascript' innerHtml={true}>
                {code}
            </Highlight>
            <ul>
                <li>Lifecycle event methods</li>
                <li>state & render</li>
                <li>props</li>
                <li>inline markup</li>
            </ul>
        </div>
    </div>
),

theme: 'light'

}