import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import{createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import firebase from './firebase/firebase'
import reducer from './redux/reducers/index'
const logger = createLogger()
const store = createStore(reducer,applyMiddleware(logger))

ReactDOM.render(
  

    <BrowserRouter>
      <React.StrictMode>
      <Provider store={store}>
        <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
