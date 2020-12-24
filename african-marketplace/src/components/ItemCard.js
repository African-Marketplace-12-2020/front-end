import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: black solid 2px;
  background-color: #ffefd5;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 2px 2px #77925f;
  border: #77925f solid 1px;
  margin: 5px 5px;
  padding: 5px;
`;

const Title = styled.h1`
  color: #77925f;
  font-weight: normal;
`;

const Text = styled.p`
  color: #77925f;
  font-weight: normal;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background: white;
  border-radius: 3px;
  color: #77925f;
  border: #77925f solid 2px;
  &:hover {
    color: white;
    background: #77925f;
  }
`;

const ItemCard = (props) => {
  console.log(props);
  const handleClick = (e) => {
    e.preventDefault();
    alert("Item added!");
  };
  return (
    <Container>
      <Title>{props.name}</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          margin: "0px 15px",
        }}>
        <Text>Value: {props.pantone_value}</Text>
        <Text>Year: {props.year}</Text>
      </div>

      <Button onClick={handleClick}>Add Item</Button>
    </Container>
  );
};

export default ItemCard;
