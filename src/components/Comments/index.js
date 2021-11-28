import React, { useState, useEffect } from "react";
import { CommentCard } from "../CommentCard";
import "./style.scss";

export const Comments = ({ name, campaignReason, commentsDb }) => {
  const [commentsInfo, setCommentsInfo] = useState([]);
  useEffect(() => {
    setCommentsInfo(commentsDb);
  }, [commentsDb]);
  return (
    <div className="comments">
      <p className="comments__title">
        Comentarios <span>({commentsInfo.length})</span>
      </p>
      {commentsInfo.map((e) => (
        <CommentCard {...e} key={`${e.name}-${e.amount}`} />
      ))}
      <div className="cta">
        <p className="cta__text">
          Tu tambien puedes tomar acción y ayudar a
          <span className="cta__name">{name}</span> con {campaignReason}
        </p>
        <button className="cta__button boton btn btn-primary btn-sm">
          Continuar
        </button>
      </div>
    </div>
  );
};
