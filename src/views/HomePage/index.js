/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Cards';
import Footer from '../../components/Footer';

const HomePage = () => (
  <Container>
    <Banner>
      <div className="content">
        <h2>Apoya una noble causa.</h2>
        <h1>
          Recaudación de fondos confiable para todos los momentos de la vida.
          <br />
          Consigue ayuda o bríndala
        </h1>
        <a
          href="/campaignform"
          className="boton2"
          data-cy="new-campaign-button"
        >
          Inicia tu campaña ahora
        </a>
      </div>
    </Banner>
    <Card />
    <Footer />
  </Container>
);

export default HomePage;
const Container = styled.div``;
const Banner = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://cdn.pixabay.com/photo/2016/07/07/17/36/orange-1502864_960_720.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .content {
    max-width: 900px;
    text-align: center;
  }
  .content h1 {
    font-size: 1.2em;
    color: #444;
    font-weight: 00;
    line-height: 40px;
  }
  .content h2 {
    font-size: 5em;
    color: #444;
    font-weight: 800;
  }
  .content p {
    font-size: 1em;
    color: black;
    font-weight: 400;
  }
`;
