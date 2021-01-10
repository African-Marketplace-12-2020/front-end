import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/marketActions';
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

const AddProduct = (props) => {
    const [addedProduct, setAddedProduct] = useState({
        name: '',
        description: '',
        price: ''
    })

    const handleProductChange = e => {
        e.preventDefault();
        setAddedProduct({
            ...addedProduct,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addProduct(addedProduct);
        setAddedProduct({
            addedProduct: {
                name: '',
                description: '',
                price: ''
            }
        })
        props.history.push('/product-list')
    }

    return (
        <div>
            <FormGroup onSubmit={handleSubmit}>
            <h1>Add a Product</h1>
            <Input id="label" 
                placeholder='Name' 
                type="text"
                name="name"
                value={addedProduct.name || ''}
                onChange={handleProductChange}
            />
            <Input  
                placeholder='Description' 
                type="text"
                name="description"
                value={addedProduct.description || ''}
                onChange={handleProductChange}
            />
            <Input 
                placeholder='Price' 
                type="text"
                name="price"
                value={addedProduct.price || ''}
                onChange={handleProductChange}
            />
            <button>Submit</button>
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
  
  export default connect(mapStateToProps, {addProduct})(AddProduct)
  