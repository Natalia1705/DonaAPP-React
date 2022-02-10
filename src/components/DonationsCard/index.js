/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationsCard = ({ donationTimes = 0, donations, goal, campaignid }) => {
  const navigate = useNavigate();
  const customWidth = () => {
    const progress =
      (donations / goal) * 100 >= 100 ? 100 : (donations / goal) * 100;
    return `${progress}%`;
  };
  return (
    <div className="donations">
      <div className="donations__progress progress">
        <div
          style={{ width: customWidth() }}
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <p className="donations__collection">
        <span className="amount">${donations}</span>
        {` Recaudados del objetivo de $${goal}`}
        <br />
        <span className="total">{donationTimes}</span>
        {' donantes'}
      </p>
      <div className="donations__buttons">
        <button
          type="button"
          className="boton btn btn-secondary btn-lg"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Compartir
        </button>
        <button
          type="button"
          className="boton btn btn-primary btn-lg"
          onClick={() => navigate(`/donate/${campaignid}`)}
        >
          Donar
        </button>
      </div>
    </div>
  );
};

export default DonationsCard;
