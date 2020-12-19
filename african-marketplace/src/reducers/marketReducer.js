import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL, 
    LOGIN_START,
    LOGIN_SUCCESS,
    ADD_USER,
    LOGIN_FAIL
} from '../actions/marketActions';

const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    isLoggedIn: false,
    userId: '',
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
    case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoggedIn: false, 
                error: action.payload
            }
        default: 
            return state
    }
}