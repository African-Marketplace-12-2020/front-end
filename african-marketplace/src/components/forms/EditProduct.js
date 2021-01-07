import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/marketActions';
import styled from "styled-components";

export const FormGroup = styled.form`
	color: black;
    display: block;
	width: 70%;
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
	background: white;
	border: none;
	border-radius: 3px;
	width: 90%;
    margin-bottom: 0.5em;
`;

const EditProduct = (props) => {
    /**
     * actual product values: 
     * name, description, location, price, plus an email
     */
    const [values, setValues] = useState([]);
   
    const handleChanges = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateProduct(setValues(values));
        setValues({
            name: '',
            pantone_value: '',
            year: ''
        })
    }

    return (
        <div>
            <FormGroup onSubmit={handleSubmit}>
            <Input id="label" 
                placeholder='Name' 
                type="text"
                name="name"
                value={values.name || ''}
                onChange={handleChanges}
            />
            <Input  
                placeholder='Description' 
                type="text"
                name="description"
                value={values.description || ''}
                onChange={handleChanges}
            />
            <Input 
                placeholder='Price' 
                type="text"
                name="price"
                value={values.price || ''}
                onChange={handleChanges}
            />
            <button>Submit</button>
            </FormGroup>
        </div>
    )
}

  export default connect(() => {
      return {}
  }, {updateProduct})(EditProduct)