/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ChurchIcon from '@mui/icons-material/Church';
import Progres from '../Progress';
import config from '../../config';
import { timeAgo } from '../../utils/timer';

const { URL_BASE } = config;

const Card = () => {
  const [campaignsData, setCampaignsData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [title, setTitle] = useState('');
  useEffect(() => {
    fetch(`${URL_BASE}/campaigns/`)
      .then((resp) => resp.json())
      .then((data) => {
        setCampaignsData(data.data);
        setFilteredResults(data.data);
      });
    /* setCampaignsData(data.data.campaigns) */
  }, []);

  const filterData = (category) => {
    if (category !== 'todas') {
      const filteredData = campaignsData.filter(
        (item) => item.category === category,
      );
      setFilteredResults(filteredData);
      setTitle(category);
    } else {
      setFilteredResults(campaignsData);
      setTitle('');
    }
  };

  return (
    <Cards>
      <div className="title">
        {/* <h2 className="titleText">
          “Hay que unirse, no para estar juntos, sino para hacer algo juntos”
        </h2> */}
        <h4>Explora las campañas principales </h4>
      </div>

      <div className="menu">
        <button className="boton a" onClick={() => filterData('todas')}>
          Todas
        </button>
        <button className="boton r" onClick={() => filterData('Salud')}>
          <LocalHospitalIcon />
        </button>
        <button className="boton r" onClick={() => filterData('Mascotas')}>
          <PetsIcon />
        </button>
        <button className="boton r" onClick={() => filterData('In memorium')}>
          <ChurchIcon />
        </button>
        <button className="boton r" onClick={() => filterData('Otros')}>
          <AllInclusiveIcon />
        </button>
      </div>
      <div className="title2">
        <h2>{title && title} </h2>
      </div>
      <Content>
        {campaignsData &&
          filteredResults.map((data) => (
            <div className="box" key={data._id} data-cy="campaign-home-cards">
              <div className="imgBx">
                <Link to={`/details/${data._id}`}>
                  <img src={data.img} alt={data.title} />
                </Link>
              </div>
              <div className="text">
                <p className="country">{data.country}</p>
                <h3>{data.title}</h3>
                <p className="name">{data.name}</p>
                <p className="description">{data.description}</p>
                <p className="date">Publicado {timeAgo(data.date)}</p>
              </div>
              <Progres
                cardData={`${(data.donations / data.objective) * 100}%`}
              />
              <h5>
                <strong>${data.donations}</strong> recolectados de $
                {data.objective}
              </h5>
            </div>
          ))}
      </Content>
    </Cards>
  );
};

export default Card;
const Cards = styled.section`
  padding-top: 2em;

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 25px;

    h4 {
      margin-bottom: 12px;
      margin-top: 12px;
      font-size: 2.5em;
      color: #444;
    }
  }
  .title2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-top: 11px;
      font-size: 2.3em;
      color: #444;
    }
  }
  .menu {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    height: 70px;
  }
  .menu .boton.a {
    justify-content: center;
    margin-left: 25px;
    height: 50px;
    width: 70px;
    border-radius: 5%;
  }
  .menu .boton.a:hover {
    height: 52px;
    width: 72px;
    color: black;
  }

  .menu .boton.r {
    margin-bottom: 0px;
    margin-left: 1em;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  .menu .boton.r:hover {
    height: 52px;
    width: 52px;
    color: black;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  margin-top: 40px;
  .box {
    width: 340px;
    margin: 20px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.1);
  }
  .box .imgBx {
    position: relative;
    width: 100%;
    height: 150px;
  }
  .box .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1px;
  }
  .box .text {
    padding: 2px 0 2px;
  }
  .box .text h3 {
    font-size: 1.2em;
    font-weight: 600;
    color: #111;
    padding: 0 5px;
    margin: 0;
  }
  .box .text p.country {
    text-align: right;
    color: #ff0157;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
  }
  .box .text p.name {
    padding: 0;
    color: #615b5d;
    font-style: italic;
  }
  .box .text p.description {
    height: 3.5em;
    font-weight: 400;
    line-height: 20px;
    color: #444444;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .box .text p.date {
    font-weight: 400;
    color: black;
    font-size: 0.9em;
    padding: 0.6em 0 0 0.6em;
  }
  .box h5 {
    margin-top: 20px;
    font-size: 14px;
  }
`;
