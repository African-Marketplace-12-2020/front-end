import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL, 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ADD_USER,
    UPDATE_USER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_MESSAGE,
    CLEAR_MESSAGE
} from '../actions/marketActions';

const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    isLoggedIn: false,
    userId: '',
    user: '',
    token: '',
    error: ''
}

export default function (state = initialState, action) {
    console.log(initialState)
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
    case ADD_USER: 
        return {
            ...state, 
            profile: action.payload.user, 
            formSubmitted: false
        }
    case FETCH_START: 
        return {
            ...state,
            isFetching: true,
            error: ''
        }
    case FETCH_SUCCESS: 
        return {
            ...state, 
            isFetching: false,
            data: action.payload,
            error: null
        }
    case FETCH_FAIL:
        return {
            ...state,
            error: action.payload
        }
        default: 
            return state
    }
}