import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <Foot>
    <hr />
    <section className="footer__nav">
      <div>
        <div className="logo">
          <span>DonApp</span>
        </div>
        <div className="language">
          <i className="far fa-flag" />
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
      <div>
        <p>MÁS INFORMACIÓN</p>
        <ul>
          <li>
            <a href="/">Cómo funciona DonApp</a>
          </li>
          <li>
            <a href="/">Preguntas frecuentes</a>
          </li>
          <li>
            <a href="/">Historias de éxito</a>
          </li>
          <li>
            <a href="/">Acerca de</a>
          </li>
        </ul>
      </div>
    </section>
    <hr />
    <section className="footer__site-info">
      <div className="social-media">
        <ul>
          <li>
            <a href="/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <YouTubeIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="copyright">
          <p>© 2021 DonApp</p>
        </div>
        <div className="legal">
          <ul>
            <li>
              <a href="/">Condiciones</a>
            </li>
            <li>
              <a href="/">Privacidad</a>
            </li>
            <li>
              <a href="/">Información legal</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Foot>
);

export default Footer;

const Foot = styled.footer`
  padding: 8px 16px 80px;
  section {
    padding: 40px;
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
      padding: 0 8px;
    }
  }
  hr {
    margin-bottom: 56px;
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
    justify-content: space-between;
  }
  .footer__nav .language p {
    color: var(--color__text);
  }
  .footer__site-info {
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 5fr 3fr 1fr;
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
      width: 70%;
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
