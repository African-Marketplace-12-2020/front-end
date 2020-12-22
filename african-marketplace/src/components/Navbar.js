import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
	height: 10vh;
	width: 100%;
	background: #77925f;
	@media screen and (max-width: 768px) {
		position: relative;
	}
`;
const Hamburguer = styled.div`
	@media screen and (max-width: 768px) {
		width: 30px;
		position: absolute;
		cursor: pointer;
		right: 5%;
		top: 50%;
		transform: translate(-5%, -50%);
		z-index: 2;
	}
`;
const Line = styled.div`
	@media screen and (max-width: 768px) {
		height: 3px;
		background: white;
		margin: 5px;
		border-radius: 25%;
	}
`;
const NavLinks = styled.ul`
	display: flex;
	color: white;
	list-style: none;
	width: 50%;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	margin-left: auto;
	@media screen and (max-width: 768px) {
		position: fixed;
		background: #5b78c7;
		height: 100%;
		width: 100%;
		flex-direction: column;
		clip-path: circle(
			${(props) => (props.display ? '1000px' : '10px')} at 85% -8%
		);
		-webkit-clip-path: circle(
			${(props) => (props.display ? '1000px' : '10px')} at 85% -8%
		);
		transition: all 1s ease-out;
	}
`;

export default function Navbar(props) {
  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  const logout = () => {
    //localStorage.removeItem('token');
    //props.history.push('/login')
    }


  return (
    <Container>
      <Hamburguer onClick={() => toggleDisplay()}>
        <Line />
        <Line />
        <Line />
      </Hamburguer>
      <NavLinks display={display}>
        <li style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
            <NavLink to="/login" onClick={logout}>Logout</NavLink>
        </li>
        <li style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
            <NavLink to="/product-list">Product List</NavLink>
        </li>
      </NavLinks>
    </Container>
  );
}
