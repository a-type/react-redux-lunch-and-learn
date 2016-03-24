'use strict';
import React, { Component } from 'react';

class LabeledInput extends Component {
    render () {
        const { required, label, type, onChange, onFocus, onBlur, value, after } = this.props;
        const input = (<input
                type={type}
                value={value}
                required={required}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                />);

        return (
            <div className='input-group input-group-{type}'>
                <label className='input-label'>
                    {required ? <span className='required-marker' title='This is a required field'/> : ''}
                    <span className='label-text'>{label}:</span>
                </label>
                {input}
                {after || ''}
            </div>
        );
    }
}

LabeledInput.propTypes = {
    required: React.PropTypes.bool,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    type: React.PropTypes.string,
    onChange: React.PropTypes.function,
    onBlur: React.PropTypes.function,
    onFocus: React.PropTypes.function,
    after: React.PropTypes.element
};

LabeledInput.defaultProps = {
    type: 'text'
};

export default LabeledInput;
