import React, { useState } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/marketActions';

const Login = (props) => {
    console.log(props)
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
        props.login(credentials);
        //props.history.push('/product-list')
        setCredentials({
            credentials: {
                username: '',
                password: ''
            }
        })
    }

    return (
        <div>
            <h1>Login component</h1>
            <form onSubmit={handleSubmit}>
                <input  
                    placeholder='Username' 
                    type="text"
                    name="username"
                    value={credentials.username || ''}
                    onChange={handleChange}
                />
                <input 
                    placeholder='Password' 
                    type="password"
                    name="password"
                    value={credentials.password || ''}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        token: state.token
    }
  }
  
  export default connect(mapStateToProps, {login})(Login)
  