import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL, 
    LOGIN,
    ADD_USER
} from '../actions/marketActions';

const initialState = {
    isLoggedIn: false,
    userId: '',
    token: '',
    data: ''
}

export const marketReducer = (state = initialState, action) => {
    switch(action.type) {
    case LOGIN: 
        return {
            ...state, 
            profile: action.payload.user, 
            isLoggedIn: true
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
            error: ''
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