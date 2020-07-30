import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import{createStore, applyMiddleware, compose} from 'redux'
import { searchTasks } from './redux/reducer'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from './firebase/firebase'

const logger = createLogger()
const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore
);
const store = createStoreWithFirebase(
  searchTasks,
  {},
  applyMiddleware(thunkMiddleware, logger)
);
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
