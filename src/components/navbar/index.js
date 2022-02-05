/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogOut } from '../../state/auth/navBarLoginSlice';
import { cleaningUser } from '../../state/auth/authSlice';
import Auth from '../../utils/Auth';

const Navbar = () => {
  const isLogged = useSelector((state) => state.navBarLoginSlice.isLogged);
  const dispatch = useDispatch();
  const [navLoger, setNavLoger] = useState(isLogged);
  useEffect(() => {
    if (isLogged) {
      setNavLoger(true);
    }
    if (!isLogged) {
      setNavLoger(false);
    }
  }, [isLogged]);
  const handleLogOut = () => {
    Auth.deleteSession();
    dispatch(setLogOut());
    dispatch(cleaningUser());
  };
  return (
    <Container>
      <Link to="/" className="logo">
        DonApp
        <span>.</span>
      </Link>
      <List>
        <li>
          <a href="/">Cómo funciona</a>
        </li>
        <li>
          <a href="/">Acerca de</a>
        </li>
        {navLoger ? (
          <>
            <li>
              <Link to="/campaigns">
                <button
                  className="boton"
                  type="button"
                  data-cy="go-to-campaigns-button"
                >
                  Ve a tus campañas
                </button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button
                  className="boton"
                  type="button"
                  onClick={handleLogOut}
                  data-cy="log-out-button"
                >
                  Cerrar sesión
                </button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button className="boton" type="button" data-cy="login-button">
                  Iniciar Sesión
                </button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button
                  className="boton"
                  type="button"
                  data-cy="register-button"
                >
                  Registrarse
                </button>
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
  box-shadow: 2px 45px 24px -34px rgba(0, 0, 0, 0.02);
  left: 0;
  width: 100%;

  padding: 20px 100px;
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
