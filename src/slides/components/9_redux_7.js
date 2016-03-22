import React from 'react';
let Highlight = require('react-highlight');

let code = `
import { combineReducers } from 'redux';
import currentSlide from './currentSlide';
import guess from './guess';
import profile from './profile';

const rootReducer = combineReducers({
    currentSlide,
    guess,
    profile
});

export default rootReducer;
`;

export default { content: (
    <div className='split-slide'>
        <h2 className='slide-title'>Reducer composition</h2>
        <div className='split-content'>
            <Highlight innerHtml={true} className='javascript'>
                {code}
            </Highlight>
            <ul>
                <li>compose multiple reducers based on role</li>
            </ul>
        </div>
    </div>
) }