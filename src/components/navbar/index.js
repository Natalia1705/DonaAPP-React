/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogOut } from '../../state/auth/navBarLoginSlice';
import Auth from '../../utils/Auth';

const Navbar = () => {
  const isLogged = useSelector((state) => state.navBarLoginSlice.isLogged);
  const dispatch = useDispatch();
  const [navLoger, setNavLoger] = useState(false);
  useEffect(() => {
    if (isLogged) {
      setNavLoger(true);
    } else {
      setNavLoger(false);
    }
  }, [isLogged]);
  const handleLogOut = () => {
    Auth.deleteSession();
    dispatch(setLogOut());
  };
  return (
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
        {navLoger ? (
          <li>
            <Link to="/">
              <text className="boton" onClick={handleLogOut}>
                Cerrar sesión
              </text>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <text className="boton">Iniciar Sesión</text>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <text className="boton">Registrarse</text>
              </Link>
            </li>
          </>
        )}
      </List>
    </Container>
  );
};

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
