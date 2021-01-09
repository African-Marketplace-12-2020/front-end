import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL, 
    ADD_PRODUCT, 
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    ADD_USER,
    UPDATE_USER
} from '../actions/marketActions';

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch(action.type) {
    case ADD_USER: 
        return {
            ...state, 
            profile: action.payload.user, 
            formSubmitted: false
        }
    case ADD_PRODUCT: 
        return {
            ...state, 
            data: action.payload, 
            formSubmitted: false
        }
    case UPDATE_PRODUCT: 
        return {
            ...state, 
            data: state.data.map(item => {
                if(item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            }), 
            formSubmitted: false
        }
    case DELETE_PRODUCT: 
            return {
                ...state, 
                data: state.data.filter(item => item.id !== action.payload)
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