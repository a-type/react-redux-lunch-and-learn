import React from 'react';
let Highlight = require('react-highlight');

let code = `
import { NEXT_SLIDE, PREV_SLIDE } from '../constants/ActionTypes';

const reduce = (state = 0, action) => {
    switch (action.type) {
        case NEXT_SLIDE:
            return state + 1;
        case PREV_SLIDE:
            let s = state - 1;
            if (s >= 0) {
                return s;
            }
            else {
                return state;
            }
        default:
            return state;
    }
};
`;

let example = `
    let state;

    state = reduce(8, { type: NEXT_SLIDE });
    assert.equal(state, 9);

    state = reduce(20, { type: PREV_SLIDE });
    assert.equal(state, 19);

    state = reduce(0, { type: PREV_SLIDE });
    assert.equal(state, 0);

    state = reduce(10, { type: 'foo' });
    assert.equal(state, 10);
`;

export default { content: (
    <div className='split-slide'>
        <h2 className='slide-title'>Writing a reducer</h2>
        <div className='split-content'>
            <Highlight innerHtml={true} className='javascript'>
                {code}
            </Highlight>
            <Highlight innerHtml={true} className='javascript'>
                {example}
            </Highlight>
        </div>
    </div>
) }