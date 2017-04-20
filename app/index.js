import React,{Component,PropTypes} from "react";
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Add from './Add';
import Async from './Async';
import {reducer} from './reducers';
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

let store=createStore(reducer,applyMiddleware(
  thunkMiddleware,
  createLogger
));

render(
  <Provider store={ store }>
    <div>
      <Add />
      <Async />
    </div>
  </Provider>,
  document.getElementById('root')
)