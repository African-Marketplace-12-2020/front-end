import { combineReducers } from 'redux';
import marketReducer from './marketReducer';
import savedState from './savedState';
//import { storeState } from './storeState';
import authReducer from './authReducer';

export default combineReducers({
    marketReducer,
    savedState,
    authReducer
})