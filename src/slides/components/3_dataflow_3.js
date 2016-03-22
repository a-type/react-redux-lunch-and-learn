import React from 'react';
let Highlight = require('react-highlight');

let code = `
    class App extends Component {
        getChildContext () {
            return {
                user: this.state.user
            };
        }

        componentDidMount () {
            let user = await sdk.getUser();
            this.setState({ user : user });
        }

        render () {
            return (<Profile />);
        }
    }
    App.childContextTypes = [
        user: React.PropTypes.object
    ];

    class Icon extends Component {
        render () {
            return (
                <img src={this.context.user.profileSrc} />
            );
        }
    }
    Icon.contextTypes = [
        user: React.PropTypes.object
    ];
`;

export default { content: (
    <div className='basic-slide'>
        <h2 className='slide-title'>Context</h2>
        <Highlight innerHtml={true}>
            {code}
        </Highlight>
    </div>
), theme: 'light' }