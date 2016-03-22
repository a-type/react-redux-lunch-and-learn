import React from 'react';
let Highlight = require('react-highlight');

let code = `
const state = {
    filterMode: 'done',
    todos: [
        {
            description: 'learn React',
            done: true
        },
        {
            description: 'learn Redux',
            done: false
        }
    ]
};
`;

export default { content: (
    <div className='split-slide'>
        <h2 className='slide-title'>App state</h2>
        <div className='split-content'>
            <Highlight className='javascript' innerHtml={true}>
                {code}
            </Highlight>
            <ul>
                <li>entire state of app data in one tree</li>
                <li>data <b>only</b></li>
                <li>immutable</li>
            </ul>
        </div>
    </div>
) }