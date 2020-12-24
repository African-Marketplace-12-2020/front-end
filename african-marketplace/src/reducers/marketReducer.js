import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL, 
    ADD_PRODUCT, 
    UPDATE_PRODUCT,
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
    console.log(action.type)
    switch(action.type) {
    case ADD_USER: 
        return {
            ...state, 
            data: action.payload, 
            formSubmitted: false
        }
    case ADD_PRODUCT: 
        return {
            ...state, 
            data: action.payload, 
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