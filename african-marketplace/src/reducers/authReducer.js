import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/marketActions';

const initialState = {
    id: '',
    credentials: {
        username: '',
        password: ''
    },
    data: [],
    isLoggedIn: false,
    userId: '',
    user: '',
    token: '',
    error: ''
}

export default function (state = initialState, action) {
    console.log(action.payload)
    switch(action.type) {
    case LOGIN_START: 
        return {
            ...state, 
            isLoggedIn: true
        }
    case LOGIN_SUCCESS: 
        return {
            ...state, 
            isLoggedIn: false, 
            data: action.payload,
            error: null
        }
    case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoggedIn: false, 
                error: action.payload
            }
    case LOGOUT: 
            return {
                ...state, 
                isLoggedIn: false,
                user: null
            }
    case REGISTER_SUCCESS: 
            return {
                ...state, 
                data: action.payload,
                isLoggedIn: false
            };
    case REGISTER_FAIL:
            return {
                ...state, 
                isLoggedIn: false
            }
        default: 
            return state
    }
}