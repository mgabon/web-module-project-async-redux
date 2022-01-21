import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import App from './App';
import './index.css';
import { reducer } from './reducers/index'

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  ,
  document.getElementById('root')
);
