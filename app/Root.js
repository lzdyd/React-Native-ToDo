import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import ToDoAppMain from './containers/ToDoAppMain';

const store = configureStore();

const ToDoApp = () => (
  <Provider store={ store }>
    <ToDoAppMain />
  </Provider>
);

export default ToDoApp;
