import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

// somehow, import styles works in webpack
import './styles/main.scss';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
