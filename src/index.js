import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose ,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers/index';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './Utils/PromiseMiddleware';
import { createLogger } from 'redux-logger'
import MainContainer from './Containers/MainContainer/MainContainer'

const logger = createLogger({collapsed:true});
const store=createStore(reducers,{},compose( applyMiddleware(thunkMiddleware,promiseMiddleware,logger)));

ReactDOM.render(
  <Provider store={store}>
    <MainContainer></MainContainer>
  </Provider>,
  document.getElementById('root'));
