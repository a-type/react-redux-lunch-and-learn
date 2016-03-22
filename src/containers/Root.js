import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SlidesApp from './SlidesApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <SlidesApp />
      </Provider>
    );
  }
}
