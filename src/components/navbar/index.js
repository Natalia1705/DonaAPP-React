/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import { Button, Badge, Toast } from 'react-bootstrap';
import { setLogOut } from '../../state/auth/navBarLoginSlice';
import { cleaningUser } from '../../state/auth/authSlice';
import Auth from '../../utils/Auth';
import socket from '../../utils/socket';

const Navbar = () => {
  const isLogged = useSelector((state) => state.navBarLoginSlice.isLogged);
  const dispatch = useDispatch();
  const [navLoger, setNavLoger] = useState(isLogged);
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [open, setOpen] = useState(false);
  const [showA, setShowA] = useState(false);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    if (isLogged) {
      socket.emit('connection', 'server connected');
      socket.on(`payment:notification:${Auth.getSession().id}`, (data) => {
        setNotification((prev) => [...prev, data]);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (isLogged) {
      setNavLoger(true);
    }
    if (!isLogged) {
      setNavLoger(false);
    }
    if (Auth.isLogin()) {
      setUserName(Auth.getSession().name);
    }
  }, [isLogged]);
  const handleLogOut = () => {
    Auth.deleteSession();
    dispatch(setLogOut());
    dispatch(cleaningUser());
    setVisible(!visible);
  };
  const toggleShowA = () => {
    setShowA(!showA);
    setVisible(false);
  };
  const toggleVisible = () => {
    setVisible(!visible);
    setShowA(false);
  };
  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="logo">
          DonApp<span>.</span>
        </h1>
      </Link>
      <MenuToggle
        toggle={open}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <List toggle={open}>
        <li>
          <Link to="/howworks" style={{ textDecoration: 'none' }}>
            C??mo funciona
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            Acerca de
          </Link>
        </li>
        {navLoger && (
          <li>
            <Notification onClick={toggleShowA}>
              <div>
                <CircleNotificationsIcon fontSize="large" />
                <div className="counter">{notification.length}</div>
              </div>
              <Notificationdd>
                <Efecto toggle={notification.length >= 1 && showA}>
                  {notification &&
                    notification.map((e) => (
                      <div className="ntdd">{`${e.name} don?? $${e.value}`}</div>
                    ))}
                </Efecto>
              </Notificationdd>
            </Notification>
          </li>
        )}

        {navLoger ? (
          <UserProfile>
            <div className="profile" onClick={toggleVisible}>
              <AccountCircleIcon fontSize="large" />
            </div>
            <MenuProfile toggle={visible}>
              <h3>{userName && userName}</h3>
              <ul>
                <li>
                  <Link to="/campaigns">
                    <span data-cy="go-to-campaigns-button">Ver Campa??as</span>
                  </Link>
                </li>
                <li onClick={handleLogOut}>
                  <Link to="/">
                    <span data-cy="log-out-button">Logout</span>
                  </Link>
                </li>
              </ul>
            </MenuProfile>
          </UserProfile>
        ) : (
          <>
            <li>
              <Link to="/login">
                <button
                  className="boton"
                  type="button"
                  data-cy="login-button"
                  onClick={() => setOpen(!open)}
                >
                  Iniciar Sesi??n
                </button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button
                  className="boton"
                  type="button"
                  data-cy="register-button"
                  onClick={() => setOpen(!open)}
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
  position: absolute;
  top: 0;
  box-shadow: 2px 45px 24px -34px rgba(0, 0, 0, 0.05);
  left: 0;
  width: 100%;
  height: 90px;
  padding: 20px 100px;
  z-index: 600;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
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
  @media (max-width: 768px) {
    ${(props) => {
      if (props.toggle) {
        return `
        width: 100%;
        height: calc(100% - 68px);
        position: fixed;
        top: 68px;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #fff;
        `;
      }
      return `
      display:none;
      `;
    }}
  }
  li {
    list-style: none;
    margin: 0 20px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
  li a {
    text-decoration: none;
    color: #444;
    font-weight: 700;
    text-align: center;
    @media (max-width: 768px) {
      color: #111;
      font-size: 1.6em;
    }
  }
  .boton {
    color: #fff;
    font-weight: 400;
    :hover {
      color: black;
    }
  }
`;
const UserProfile = styled.div`
  position: absolute;
  top: -10px;
  right: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    left: -55px;
    top: 40px;
  }
`;

const MenuProfile = styled.div`
  ::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 15px;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
  }
  position: absolute;
  top: 50px;
  right: -10px;
  padding: 10px 0px;
  background: #fff;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  box-shadow: -1px 3px 24px -1px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.toggle) {
      return `
      visibility: visible;
      opacity: 1;
      `;
    }
    return `
    visibility: hidden;
    opacity: 0;
      `;
  }}
  h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 500;
    color: #555;
    line-height: 1.2em;
  }

  ul li {
    list-style: none;
    margin-left: -35px;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: 500;
      :hover {
        opacity: 1;
        color: #ff0157;
      }
    }
  }
  @media (max-width: 768px) {
    ::before {
      content: '';
      position: relative;
    }
    position: relative;
    width: 250px;
  }
`;

const MenuToggle = styled.div`
  @media (max-width: 768px) {
    position: relative;
    width: 40px;
    height: 40px;
    top: 8px;
    cursor: pointer;
    ${(props) => {
      if (props.toggle) {
        return `
        background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/480px-OOjs_UI_icon_close.svg.png");
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: center;
        `;
      }
      return `
      background: url("https://www.samueldiosdado.com/wp-content/uploads/2017/08/Men??-hamburguesa-herramienta-practica-o-icono-inutil-900x753.png");
      background-size: 40px;
      background-repeat: no-repeat;
      background-position: center;
      `;
    }}
  }
`;

const Notification = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  margin-right: 10px;
  cursor: pointer;
  .counter {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff0157;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    top: 0;
    left: 23px;
    color: #fff;
  }
`;
const Notificationdd = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  position: absolute;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  .ntdd {
    position: relative;
    top: 10px;
    right: 156px;
    margin: 5px;
    padding: 10px 4px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    font-size: 12px;
    box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 6px 5px 2px rgba(0, 0, 0, 0.6);

    z-index: 100;
    border-radius: 15px;
  }
`;

const Efecto = styled.div`
  ${(props) => {
    if (props.toggle) {
      return `
      visibility: visible;
      
      ::after {
      content: '';
      position: absolute;
      top: 10px;
      right: 180px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: rotate(45deg);
  }
      `;
    }
    return `
    visibility: hidden;
    
      `;
  }}
`;
