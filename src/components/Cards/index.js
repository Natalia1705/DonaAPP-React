/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Progres from '../Progress';
import config from '../../config';
import { timeAgo } from '../../utils/timer';

const { URL_BASE } = config;

const Card = () => {
  const [campaignsData, setCampaignsData] = useState([]);
  useEffect(() => {
    fetch(`${URL_BASE}/campaigns/`, {
      headers: { limit: 6 },
    })
      .then((resp) => resp.json())
      .then((data) => setCampaignsData(data.data));
    /* setCampaignsData(data.data.campaigns) */
  }, []);

  return (
    <Cards>
      <div className="title">
        <h2 className="titleText">
          Lorem. <span>I</span>
          psus
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          praesentium, facere suscipit at repellendus consectetur.
        </p>
      </div>
      <Content>
        {campaignsData &&
          campaignsData.map((data) => (
            <div className="box" key={data._id} data-cy="campaign-home-cards">
              <div className="imgBx">
                <Link to={`/details/${data._id}`}>
                  <img src={data.img} alt={data.title} />
                </Link>
              </div>
              <div className="text">
                <h3>{data.title}</h3>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>Publicado {timeAgo(data.date)}</p>
              </div>
              <Progres
                cardData={`${(data.donations / data.objective) * 100}%`}
              />
              <h5>
                ${data.donations} recolectados de ${data.objective}
              </h5>
            </div>
          ))}
      </Content>
    </Cards>
  );
};

export default Card;

const Cards = styled.section`
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    flex-direction: column;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.08);
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
  }
  .box .text {
    padding: 15px 0 5px;
  }
  .box .text h3 {
    font-weight: 400;
    color: #111;
    padding: 0 12px;
  }
  .box h5 {
    margin-top: 20px;
    font-size: 14px;
  }
`;
