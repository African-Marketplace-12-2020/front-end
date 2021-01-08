import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import { fetchData, deleteProduct } from '../actions/marketActions';
import ProductForm from '../components/forms/ProductForm';
import CircleLoader from '../CircleLoader';
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

const FlexContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ProductList = (props) => {
    const [editing, setEditing] = useState();
    useEffect(() => {
        props.fetchData();
    }, [])

    return (
        <div>
        <Container>
            <ProductForm />
            <FlexContainer>

            {props.isFetching ? (
            <CircleLoader />
                ) : ( 
                    props.productsAsProps && props.productsAsProps.map(item => 
                        <div key={item.id}>
                            <ItemCard data={item} editProduct={editing} />
                        </div>
                )
            )}
            </FlexContainer>
        </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state.marketReducer.data)
    return {
        productsAsProps: state.marketReducer.data,
        isFetching: state.marketReducer.isFetching,
        error: state.marketReducer.error
    }
  }

export default connect(mapStateToProps, {fetchData, deleteProduct})(ProductList)