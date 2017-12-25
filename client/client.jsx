import React from 'react';
// import { render } from 'react-dom';
// import { Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import createBrowserHistory from 'history/createBrowserHistory';
import appReducer from './reducers';
import './scss/main.scss';
import { App } from './containers';
import Header from './components/Header';
import Article from './components/Article';
import Aside from './components/Aside';

const history = createBrowserHistory();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const middleware = [thunk, promiseMiddleware()];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  appReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  ));

render(
  <Provider store={store}>
    <div>
      <Header />
      <Article />
      <Aside />
    </div>
  </Provider>,
  document.getElementById('app')
);
