import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addProduct, updateProduct } from '../../actions/marketActions';
import styled from "styled-components";

const Container = styled.nav`
  height: 10vh;
  width: 90%;
  margin: 0.5rem;
  padding: 1rem;
  background: #fff;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const FlexContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const FormGroup = styled.form`
	color: black;
    display: block;
	width: 50%;
    margin: 50px auto;
    padding: 2rem;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
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

const ProductForm = (props) => {
    //console.log(props)
    const [values, setValues] = useState({
      name: "",
      pantone_value: "",
      year: "",
    });

    useEffect(() => {
        props.editProduct && setValues(props.editProduct);
    }, [props.updateProduct])

    const handleProductChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values)
      props.addProduct(values);
      setValues({
        name: "",
        pantone_value: "",
        year: "",
      })
    };

    return (
        <div>
        <h1>Product Form Component</h1>
          <FormGroup onSubmit={handleSubmit}>
            <h1>Product Form</h1>
            <Input id="label" 
                placeholder='Name' 
                type="text"
                name="name"
                value={values.name || ''}
                onChange={handleProductChange}
            />
            <Input  
                placeholder='Pantone Value' 
                type="text"
                name="pantone_value"
                value={values.pantone_value || ''}
                onChange={handleProductChange}
            />
            <Input 
                placeholder='Year' 
                type="text"
                name="year"
                value={values.year || ''}
                onChange={handleProductChange}
            />
            <button>Submit</button>
            </FormGroup>
        </div>
    )
}

export default connect(
  () => {
    return {}
}, {addProduct, updateProduct})(ProductForm)