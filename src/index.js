import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import reducer from './reducer'

const reduxLogger = createLogger({
  collapsed: true
})

//const middlewares = [thunk && reduxLogger].filter(Boolean)

export const store = createStore(
  reducer,
  applyMiddleware(thunk, reduxLogger, promise)
)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
