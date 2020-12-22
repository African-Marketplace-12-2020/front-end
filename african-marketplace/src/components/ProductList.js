//use this file to create the ProductList component 
/*
    other components that need to be created in the /components directory are 
    Search.js
    Navbar.js
    SavedItem.js

    /components/forms/Signup.js
    /components/forms/AddProduct.js
*/
import React from 'react';
import ItemCard from './ItemCard';
import styled from "styled-components";

const Container = styled.nav`
  height: 10vh;
  width: 100%;
  background: #fff;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const ProductList = () => {
    return (
        <Container>
            <h1>Product List</h1>
            {/** A map method will be put here to map over the api data and 
                building out as many item cards as there are results from the api */}
            <ItemCard />
        </Container>
    )
}

export default ProductList;