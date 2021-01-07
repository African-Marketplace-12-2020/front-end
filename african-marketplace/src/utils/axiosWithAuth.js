import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://bw-172-african-marketplace.herokuapp.com/api',
        headers: {
        'Content-Type': 'application/json',
         'authorization': `${token}`
        }
      })
}

export default axiosWithAuth;