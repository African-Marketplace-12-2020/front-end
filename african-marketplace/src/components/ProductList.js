import React, { useEffect } from "react";
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import { fetchData } from '../actions/marketActions';
import styled from "styled-components";

const Container = styled.nav`
  height: 10vh;
  width: 100%;
  margin: 0.5rem;
  background: #fff;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;


const ProductList = (props) => {
    console.log(props.productsAsProps)
    useEffect(() => {
        props.fetchData();
      }, [])

    return (
        <Container>
            <h1>Product List</h1>
            {props.isFetching ? (
            <div>...fetching...</div>
            ) : ( 
            props.productsAsProps && props.productsAsProps.map(item => 
                <div key={item.id}>
                    <p>Name: {item.name}</p> 
                    <p>Value: {item.pantone_value}</p>
                    <p>Year: {item.year}</p>
                </div>
            )
            )}
        </Container>
    )
}

const mapStateToProps = (state) => {
    //console.log(state.marketReducer.data.data)
    return {
        productsAsProps: state.marketReducer.data.data,
        isFetching: state.isFetching,
        error: state.error
    }
  }
  
  export default connect(mapStateToProps, {fetchData})(ProductList)
