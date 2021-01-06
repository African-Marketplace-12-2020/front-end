import React from 'react';
import Categories from './Categories';
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

const CategoryWrapper = (props) => {
  console.log(props)
    return (
      <Container>
          <h1>Categories</h1>
          {/** pass in the data that will inject the 
              categories data from the api here in the Categories
              component */}
          <Categories />
      </Container>   
    )
}

export default CategoryWrapper;