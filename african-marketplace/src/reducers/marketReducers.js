import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL 
} from '../actions/exhibitActions';

const initialState = {
    "data": "",
}

export const marketReducer = (state = initialState, action) => {
    switch(action.type) {
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