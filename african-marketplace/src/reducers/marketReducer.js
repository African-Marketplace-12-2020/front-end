import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL, 
    ADD_USER,
    UPDATE_USER,
    SET_MESSAGE,
    CLEAR_MESSAGE
} from '../actions/marketActions';

const initialState = {
    data: [],
    isFetching: false,
    error: ''
}

export default function (state = initialState, action) {
    console.log(state)
    switch(action.type) {
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