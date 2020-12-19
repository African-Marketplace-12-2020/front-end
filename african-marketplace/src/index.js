import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import { marketReducer, savedState, storeState, reducer } from './reducers';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { marketReducer } from './reducers/marketReducers';
import { savedState } from './reducers/savedState';
import { storeState } from './reducers/storeState';
import { reducer } from './reducers/reducer';

const rootReducer = combineReducers({
  marketReducer, 
  savedState, 
  storeState, 
  reducer
})

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
  rootReducer,
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
