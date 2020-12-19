import React, {useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from '../../actions/marketActions';

const Login = () => {
    const [credentials, setCredentials] = useState([
        {
            username: '',
            password: ''
        }
    ])

    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            credentials: {
                ...credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", credentials)
            .then(res => {
                //localStorage.setItem('token', res.data.payload)
                //this.props.history.push('/product-list')
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    return (
        <div>
            <h1>Login component</h1>
            <form>
                <input  
                    placeholder='Username' 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    placeholder='Password' 
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;