import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/marketActions';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
            username: '',
            password: ''
        })

    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials)
        login(credentials);
        props.history.push('/product-list')
        setCredentials({
            credentials: {
                username: '',
                password: ''
            }
        })
    }
    //1. test login, console credentials
    //2. test marketActions, console credentials and data 
    //3. test marketReducer, console action.payload
    return (
        <div>
            <h1>Login component</h1>
            <form onSubmit={handleSubmit}>
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

const mapStateToProps = (state) => {
    return {
    credentials: {
        username: state.data,
        password: state.data
    },
      userId: state.data,
      isLoggedIn: state.isFetching,
      error: state.error,
      token: state.data
    }
  }
  
  export default connect(mapStateToProps, {login})(Login);