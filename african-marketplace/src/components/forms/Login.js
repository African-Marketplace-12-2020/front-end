import React, { useState } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/marketActions';
import styled from "styled-components";

export const FormGroup = styled.form`
	color: black;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

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
            <FormGroup onSubmit={handleSubmit}>
            <h1>Login component</h1>
            <Input id="label" 
                placeholder='Username' 
                type="text"
                name="username"
                value={credentials.username || ''}
                onChange={handleChange}
            />
            <Input 
                placeholder='Password' 
                type="password"
                name="password"
                value={credentials.password || ''}
                onChange={handleChange}
            />
            <button>Login</button>
            </FormGroup>
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
  