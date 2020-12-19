import { combineReducers } from 'redux';
import marketReducer from './marketReducer';
import savedState from './savedState';
//import { storeState } from './storeState';
//import { reducer } from './reducer';

export default combineReducers({
    marketReducer,
    savedState
})