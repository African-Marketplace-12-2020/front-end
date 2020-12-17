import axios from 'axios';

export const FETCH_START = 'FFETCH_TART';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

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