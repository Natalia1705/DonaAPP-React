import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const cardData = [
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium, facere suscipit at repellendus consectetur',
      amount: 10000,
      collected: 4000,
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium, facere suscipit at repellendus consectetur',
      amount: 10000,
      collected: 8000,
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium, facere suscipit at repellendus consectetur',
      amount: 10000,
      collected: 1500,
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium, facere suscipit at repellendus consectetur',
      amount: 10000,
      collected: 2500,
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium, facere suscipit at repellendus consectetur',
      amount: 10000,
      collected: 200,
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium, facere suscipit at repellendus consectetur',
      amount: 10000,
      collected: 5000,
    },
  ];
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
      <div className="content">
        {cardData.map((data) => (
          <div className="box">
            <div className="imgBx">
              <img src="/" alt="" />
            </div>
            <div className="text">
              <h3>{data.title}</h3>
              <p>{data.title}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                enim.
              </p>
              <p>Último donativo hace...</p>
            </div>
          </div>
        ))}
      </div>
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
  .content {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .content .box {
    width: 340px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    border: 15px solid #fff;
    box-shadow: 0 5px 35px rgba(0, 0, 0, 0.08);
  }
  .content .box .imgBx {
    position: relative;
    width: 100%;
    height: 150px;
  }
  .content .box .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content .box .text {
    padding: 15px 0 5px;
  }
  .content .box .text h3 {
    font-weight: 400;
    color: #111;
  }
`;
