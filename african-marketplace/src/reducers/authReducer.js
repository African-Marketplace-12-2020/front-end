import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	RELOAD_OFF,
} from '../actions/marketActions';

const initialState = {
	id: '',
	credentials: {
		username: '',
		password: '',
	},
	data: [],
	isLoggedIn: false,
	userId: '',
	user: '',
	token: '',
	error: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				isLoggedIn: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				data: action.payload,
				error: null,
			};
		case LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				error: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoggedIn: false,
			};
		case REGISTER_FAIL:
			return {
				...state,
				isLoggedIn: false,
			};
		case RELOAD_OFF:
			return {
				...state,
				isLoggedIn: false,
			};
		default:
			return state;
	}
}
