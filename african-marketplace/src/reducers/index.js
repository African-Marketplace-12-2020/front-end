import { combineReducers } from 'redux';
import { marketReducer } from './marketReducers';
//import { savedState } from './savedState';
//import { storeState } from './storeState';
//import { reducer } from './reducer';

export default combineReducers({
    market: marketReducer
})