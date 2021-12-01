import React from "react";
import { useNavigate } from "react-router";

export const DonationsCard = ({ commentsDb, goal }) => {
  let navigate = useNavigate();
  return (
    <div className="donations">
      <div className="donations__progress progress">
        <div
          style={{
            width: `${
              (commentsDb
                .map((e) => e.amount)
                .reduce((acc, e) => Number(acc) + Number(e)) /
                goal) *
              100
            }%`,
          }}
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p className="donations__collection">
        <span className="amount">
          S./{" "}
          {commentsDb
            .map((e) => e.amount)
            .reduce((acc, e) => Number(acc) + Number(e))}
        </span>
        {` Recaudados del objetivo de S./ ${goal}`}
        <br />
        <span className="total">{commentsDb.length}</span> donantes
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
          className="boton btn btn-primary btn-lg"
          onClick={() => navigate("/donate")}
        >
          Donar
        </button>
      </div>
    </div>
  );
};
