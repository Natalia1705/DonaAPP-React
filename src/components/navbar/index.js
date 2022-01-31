import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <Container>
    <a href="/" className="logo">
      DonApp
      <span>.</span>
    </a>
    <List>
      <li>
        <a href="/">Para particulares</a>
      </li>
      <li>
        <a href="/">Para organizaciones benéficas</a>
      </li>
      <li>
        <a href="/">Acerca de</a>
      </li>
      <li>
        <a href="/login" className="boton">
          Iniciar Sesión
        </a>
      </li>
      <li>
        <a href="/register" className="boton">
          Registrarse
        </a>
      </li>
    </List>
  </Container>
);

export default Navbar;

const Container = styled.header`
  position: Absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .logo {
    color: #444;
    font-weight: 700;
    font-size: 2em;
    text-decoration: none;
    margin-bottom: 20px;
  }
`;
const List = styled.div`
  position: relative;
  display: flex;
  li {
    list-style: none;

    margin-left: 30px;
  }
  li a {
    text-decoration: none;
    color: #444;
    font-weight: 700;
    text-align: center;
  }
  .boton {
    color: #fff;
    font-weight: 400;
    :hover {
      color: black;
    }
  }
`;
