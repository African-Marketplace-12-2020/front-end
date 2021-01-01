import React, { useEffect } from "react";
import ItemCard from './ItemCard';
import { connect } from 'react-redux';
import { fetchData } from '../actions/marketActions';
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ProductList = (props) => {
    //console.log(props.productsAsProps)
    useEffect(() => {
        props.fetchData();
      }, [])

    return (
        <Container>
            <h1>Product List</h1>
            <FlexContainer>
            {props.productsAsProps && props.productsAsProps.map(item => 
                <div key={item.id}>
                    <ItemCard data={item} />
                </div>
            )}
            </FlexContainer>
        </Container>
    )
}

const mapStateToProps = (state) => {
    //console.log(state.marketReducer.data.data)
    return {
        productsAsProps: state.marketReducer.data.data,
        isFetching: state.marketReducer.isFetching,
        error: state.marketReducer.error
    }
  }
  
  export default connect(mapStateToProps, {fetchData})(ProductList)
