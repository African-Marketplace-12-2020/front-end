import React, { useState } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { updateProduct, deleteProduct } from '../actions/marketActions';
import EditProduct from './forms/EditProduct';


const Container = styled.div`
  border: black solid 2px;
  background-color: #ffefd5;
  width: 325px;
  border-radius: 10px;
  border: #77925f solid 1px;
  margin: 10px 5px;
  padding: 5px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Title = styled.h1`
  color: #77925f;
  font-weight: normal;
`;

const Text = styled.p`
  color: #77925f;
  font-weight: normal;
  margin: 10px 0px;
`;

const initialItemToEdit = {
  name: "",
  pantone_value: "",
  year: "",
};

const ItemCard = (props) => {
  const [editing, setEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialItemToEdit);

  const editItem = item => {
    setEditing(!editing);
  };

  const cancelEdit = item => {
    setEditing(false);
  };

  return (
    <div>
    <Container>
      <Title>{props.data.name}</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginLeft: "5px",
        }}>
        <Text>Description: {props.data.description}</Text>
        <Text>Price: ${props.data.price}.00</Text>
        <Text>Location: {props.data.location}</Text>
        <Text>Category: {props.data.category}</Text>
        
      </div>
      {!editing && (
          <div className="button-row">
              <button onClick={() => editItem()}>Edit Item</button>
              
              <button onClick={() => {props.deleteProduct(props.data.id)}}>Delete</button>
          </div>
      )}
        {editing && (
            <EditProduct data={props.data} editItem={editItem} editing={editing} />
        )}
        {editing && (
            <button onClick={() => cancelEdit(props.data)}>Cancel</button>
        )}
    </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      productsAsProps: state.marketReducer.data.data,
      isFetching: state.marketReducer.isFetching,
      error: state.marketReducer.error
  }
}

export default connect(mapStateToProps,{updateProduct, deleteProduct})(ItemCard);
