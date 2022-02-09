/* eslint-disable react/destructuring-assignment */
/* eslint-disable implicit-arrow-linebreak */
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import config from '../../config';

const { URL_BASE } = config;

const verifyUser = (token) =>
  axios
    .get(`${URL_BASE}/user/confirm/${token}`)
    .then((response) => response.data);

const Welcome = () => {
  const { token } = useParams();
  useEffect(() => {
    verifyUser(token);
  }, []);

  return (
    <Container>
      <Sesion>
        <div className="content">
          <img
            src="https://cdn3.iconfinder.com/data/icons/user-actions-9/128/user_action_set_2_final-30-512.png"
            alt="404 error"
          />
          <h3 className="Title1">Cuenta confirmada</h3>
          <Link to="/login" className="boton">
            Inicia tu sesión ahora
          </Link>
        </div>
      </Sesion>
    </Container>
  );
};
export default Welcome;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sesion = styled.div`
  margin-top:0.5rem;



.content{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

  .content img {
    margin-top:6rem;
    width: 10rem;
  }

  .content h1 {
    font-size: 2rem;
 
  }

  content boton {
    color: #fff;
    font-weight: 400;
    align-self: center;
    cursor: pointer;
    :hover {
      color: black;
    }
`;
