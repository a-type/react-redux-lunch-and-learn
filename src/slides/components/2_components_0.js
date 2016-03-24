import React from 'react';
import LabeledInput from '../../components/LabeledInput';

export default { content: (
    <div className='split-slide slide-light'>
        <h2 className='slide-title'>Element abstraction</h2>
        <div className='split-content'>
            <div>
                <LabeledInput type='text' required label='Required Field'/>
            </div>
            <div>
                <LabeledInput type='text' label='Optional Field'/>
            </div>
        </div>
    </div>
)
}