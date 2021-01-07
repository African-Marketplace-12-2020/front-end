import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/marketActions';
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

const Signup = (props) => {
    console.log(props)
    const [signup, setSignup] = useState({
        username: '',
        password: '',
    })


    const handleSignupChange = e => {
        e.preventDefault();
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signup(signup);
        setSignup({
            signup: {
                username: '',
                password: '',
            }
        })
        props.history.push('/product-list')
    }

    return (
        <div>
            <FormGroup onSubmit={handleSubmit}>
            <h1>Signup component</h1>
            <Input id="label" 
                placeholder='Username' 
                type="text"
                name="username"
                value={signup.username || ''}
                onChange={handleSignupChange}
            />
            <Input 
                placeholder='Password' 
                type="password"
                name="password"
                value={signup.password || ''}
                onChange={handleSignupChange}
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
  
  export default connect(mapStateToProps, {signup})(Signup)
  