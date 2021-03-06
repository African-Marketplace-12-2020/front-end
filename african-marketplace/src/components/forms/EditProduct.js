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
        //console.log(props.data.id)
        props.updateProduct({...values, id: props.data.id});
        setValues({
            name: '',
            description: '',
            price: ''
        })
        props.editItem(!props.editing)
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

  export default connect(() => {
      return {}
  }, {updateProduct})(EditProduct)