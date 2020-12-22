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
    padding: 2rem;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
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
	width: 90%;
	margin-bottom: 0.5em;
`;

const Login = (props) => {
    console.log(props.isLoggedIn)
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
        
        setCredentials({
            credentials: {
                username: '',
                password: ''
            }
        })
        props.history.push('/product-list')
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
  