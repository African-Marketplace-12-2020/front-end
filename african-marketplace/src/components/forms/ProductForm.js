import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addProduct, updateProduct } from '../../actions/marketActions';
import styled from "styled-components";

const Container = styled.nav`
  height: 10vh;
  width: 100%;
  margin: 0.5rem;
  padding: 1rem;
  background: #fff;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

export const FormGroup = styled.form`
	color: black;
    display: block;
	  width: 40%;
    margin: 50px auto;
    padding: 2rem;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 768px) {
      width: 60%;
      margin: 30px auto;
    }
`;

export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 98%;
    margin-bottom: 0.5em;
`;

const ProductForm = (props) => {
    const [values, setValues] = useState({
      name: '',
      description: '',
      price: ''
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
        name: '',
        description: '',
        price: ''
      })
    };

    return (
        <div>
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
                placeholder='Description' 
                type="text"
                name="description"
                value={values.description || ''}
                onChange={handleProductChange}
            />
            <Input 
                placeholder='Price' 
                type="text"
                name="price"
                value={values.price || ''}
                onChange={handleProductChange}
            />


          <div className="form-group">
                <label>Location:    </label>
                <select
                    className="form-control" 
                    onChange={e =>
                      setValues({ ...values, location: e.target.value })
                    }
                    value={values.location}
                >
                  <option value="">--Please choose a location--</option>
                  <option value="Bungoma">Bungoma</option>
                  <option value="Isiolo">Isiolo</option>
                  <option value="Nairobi">Nairobi</option>
                </select>
              </div>

              <div className="form-group">
                <label>Category:    </label>
                <select
                    className="form-control" 
                    onChange={e =>
                      setValues({ ...values, category: e.target.value })
                    }
                    value={values.category}
                >
                  <option value="">--Please choose a Category--</option>
                  <option value="Clothing">Clothing & Apparel</option>
                  <option value="Artwork">Authentic Artwork</option>
                  <option value="Food">Food Items</option>
                </select>
              </div>
            <button>Submit</button>
            </FormGroup>
        </div>
    )
}

export default connect(
  () => {
    return {}
}, {addProduct, updateProduct})(ProductForm)