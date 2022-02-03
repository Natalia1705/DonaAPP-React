/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationsCard = ({ commentsDb, goal }) => {
  const navigate = useNavigate();
  const customWidth = () => {
    const commentMap = commentsDb.map((e) => e.amount);
    const commentReduce = commentMap.reduce(
      (acc, e) => Number(acc) + Number(e),
    );
    return `${(commentReduce / goal) * 100} %`;
  };
  return (
    <div className="donations">
      <div className="donations__progress progress">
        <div
          style={{ width: customWidth }}
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <p className="donations__collection">
        <span className="amount">
          S./
          {commentsDb
            .map((e) => e.amount)
            .reduce((acc, e) => Number(acc) + Number(e))}
        </span>
        {` Recaudados del objetivo de S./ ${goal}`}
        <br />
        <span className="total">{commentsDb.length}</span>
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
          onClick={() => navigate('/donate')}
        >
          Donar
        </button>
      </div>
    </div>
  );
};

export default DonationsCard;
