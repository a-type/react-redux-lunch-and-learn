import React, { Component } from 'react';

export default class Slide extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className={`slide ${theme}`}>
                {this.props.content}
            </div>
        );
    }
}