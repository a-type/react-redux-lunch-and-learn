import React from 'react';

let Highlight = require('react-highlight');

let code = `
import Icon from './Icon';
import Bio from './Bio';

class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user: {
                iconSrc: '/icons/default.png',
                username: 'Loading...',
                bio: 'Loading...'
            }
        };
    }

    componentDidMount () {
        let user = await sdk.getUser(this.props.userId);
        this.setState({ user: user });
    }

    render () {
        const user = this.state.user;
        return (<div>
            <Icon source={user.iconSrc} />
            <h2>{user.username}</h2>
            <Bio text={user.bio} />
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