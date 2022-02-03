import React from 'react';

const Progres = ({ cardData }) => (
  <div className="progress">
    <div
      className="progress-bar bg-success"
      role="progressbar"
      style={{ width: cardData }}
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      {`${Math.round(cardData.split('%')[0])}%`}
    </div>
  </div>
);

export default Progres;
