import React from 'react';
let Highlight = require('react-highlight');

let code = `
import { SET_SLIDE } from '../constants/ActionTypes';
export function setCurrentSlide (slide) {
    return {
        type: SET_SLIDE,
        payload: { slide }
    };
}
`;

export default { content: (
    <div className='split-slide'>
        <h2 className='slide-title'>Actions</h2>
        <div className='split-content'>
            <Highlight className='javascript' innerHtml={true}>
                {code}
            </Highlight>
            <ul>
                <li>basic data and type</li>
                <li>preferably, include all necessary data</li>
                <li>dispatch and forget</li>
            </ul>
        </div>
    </div>
) }