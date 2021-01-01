import axios from 'axios';
//import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_START = 'FFETCH_TART';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const SET_MESSAGE = 'SET_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';


export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_START });
    setTimeout(() => {
        axios
        .get('https://reqres.in/api/unknown')
        .then(res => {
            const data = res.data
          dispatch({ type: FETCH_SUCCESS, payload: data })
        })
        .catch( err => dispatch({ type: FETCH_FAIL, payload: err }))
    }, 3000);
  };

  export const login = (credentials) => (dispatch) => {
    let logIn = credentials;
    dispatch({ type: LOGIN_START })
    return axios.post('https://reqres.in/api/login', logIn)
    .then(res => {
        const token = res.data.token;
        const data = res.data;
        localStorage.setItem('token', token)
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    })
    .catch( err => dispatch({ type: LOGIN_FAIL, payload: err }))
  }

  export const signup = (signup) => (dispatch) => {
    let registration = signup;

    return axios.post('https://reqres.in/api/register', registration)
    .then(res => {
        const token = res.data.token;
        const data = res.data;
        localStorage.setItem('token', token)
        dispatch({ type: REGISTER_SUCCESS, payload: data })
    })
    .catch( err => dispatch({ type: REGISTER_FAIL, payload: err }))
  }

  export const addProduct = (addProduct) => (dispatch) => {
    let newProduct = addProduct;

    return axios.post('https://reqres.in/api/unknown', newProduct)
    .then(res => {
        const token = res.data.token;
        const data = res.data;
        console.log(res)
        localStorage.setItem('token', token)
        dispatch({ type: ADD_PRODUCT, payload: data })
    })
    .catch( err => dispatch({ type: REGISTER_FAIL, payload: err }))
  }