import { combineReducers } from 'redux';
import marketReducer from './marketReducer';
import authReducer from './authReducer';

export default combineReducers({
    marketReducer,
    authReducer
})

