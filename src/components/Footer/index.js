import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Foot>
    <hr />
    <section className="footer__nav">
      <div>
        <div className="logo">
          <span>DonApp</span>
        </div>
        <div className="language">
          <p>Español - Latam</p>
        </div>
      </div>
      <div>
        <p>RECAUDAR FONDOS PARA</p>
        <ul>
          <li>
            <a href="/">Salud</a>
          </li>
          <li>
            <a href="/">Educación</a>
          </li>
          <li>
            <a href="/">In Memoriam</a>
          </li>
          <li>
            <a href="/">Animales</a>
          </li>
        </ul>
      </div>
      <div className="works">
        <p>MÁS INFORMACIÓN</p>
        <ul>
          <li>
            <Link to="/howworks">
              <span>Cómo funciona DonApp</span>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <span>Acerca de</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
    <hr />
    <section className="footer__site-info">
      <div className="content">
        <div className="legal">Desarrollado en el topV19.</div>
      </div>
    </section>
  </Foot>
);

export default Footer;

const Foot = styled.footer`
  padding: 8px 16px 0px;
  section {
  }
  .works ul li span {
    color: #767777;
    font-weight: 400;
  }
  .footer__nav {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 4fr 4fr 4fr 1fr;
      grid-template-rows: 1fr;
    }
  }
  .footer__nav span {
    color: var(--color__main);
    font-weight: bold;
  }
  .footer__nav div p {
    color: var(--color__main);
    font-weight: bold;
    @media (min-width: 1024px) {
      padding: 0;
      margin: 0;
    }
  }
  hr {
    margin-bottom: 30px;
  }
  .footer__nav div ul {
    padding: 0;
  }
  .footer__nav div ul li a {
    color: var(--color__text);
    text-decoration: none;
    cursor: pointer;
  }
  div ul li {
    list-style: none;
  }
  .footer__nav .language {
    margin-top: 36px;
    width: 180px;
    display: flex;
    justify-content: flex-start;
    margin-left: 0px;
  }
  .footer__nav .language p {
    color: var(--color__text);
  }
  .footer__site-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .content {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
      .legal {
        font-size: 20px;
        color: #767777;
      }
    }
  }
  .footer__site-info .social-media ul {
    width: 60%;
    max-width: 364px;
    display: flex;
    justify-content: space-between;
  }
  .footer__site-info div ul li a {
    color: var(--color__text);
    text-decoration: none;
    cursor: pointer;
  }
  .footer__site-info .copyright {
    color: var(--color__text);
  }
  .footer__nav div:nth-child(1) {
    @media (min-width: 1024px) {
      grid-column-start: 2;
    }
  }
  .footer__site-info .social-media {
    @media (min-width: 1024px) {
      grid-column-start: 3;
      grid-row-start: 1;
    }
  }
  .footer__site-info .content {
    @media (min-width: 1024px) {
      grid-column-start: 2;
      display: flex;
      justify-content: space-between;
    }
  }
  .footer__site-info .content .copyright {
    @media (min-width: 1024px) {
      width: 30%;
    }
  }
  .footer__site-info .content .legal {
    @media (min-width: 1024px) {
      width: 100%;
    }
  }
  .footer__site-info .content .legal ul {
    @media (min-width: 1024px) {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
    .footer__site-info .social-media ul {
      @media (min-width: 1024px) {
        margin-left: 20%;
      }
    }
  }
`;
