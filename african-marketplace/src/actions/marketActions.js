import axios from 'axios';

export const FETCH_START = 'FFETCH_TART';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const LOGIN = 'LOGIN';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const FORM_SUBMISSION_STATUS = 'FORM_SUBMISSION_STATE';

export const fetchData = () => dispatch => {
    /*
    dispatch({ type: FETCH_START });
    setTimeout(() => {
        axios
        .get('api url here...')
        .then(res => {
            const data = res.data.objects
          dispatch({ type: FETCH_SUCCESS, payload: data })
        })
        .catch( err => dispatch({ type: FETCH_FAIL, payload: err }))
    }, 3000);
    */
  };

  export const login = (credentials) => (dispatch) => {
    let logIn = credentials;
    axios
    .post('http://localhost:3000/users', logIn)
    .then(res => {
        const data = res.data
      dispatch({ type: LOGIN, payload: data })
    })
    .catch( err => dispatch({ type: LOGIN_FAIL, payload: err }))
  }