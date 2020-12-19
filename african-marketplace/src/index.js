import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { marketReducer } from './reducers/marketReducers';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//consider importing combineReducers from 'redux' 
/**
 * You can set it up as follows:
 * import profile from '../reducers/profile' or wherever you have it
 * 
 * const rootReducer = combineReducers({
 *  user: profile
 * })
 */

const store = createStore(
  marketReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
