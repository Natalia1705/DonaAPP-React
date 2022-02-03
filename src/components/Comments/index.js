/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommentCard from '../CommentCard';
import './style.scss';

const Comments = ({ name, commentsDb }) => {
  const navigate = useNavigate();
  const [commentsInfo, setCommentsInfo] = useState([]);
  useEffect(() => {
    setCommentsInfo(commentsDb);
  }, [commentsDb]);
  return (
    <div className="comments">
      <p className="comments__title">
        {'Comentarios '}(<span>{commentsInfo.length}</span>)
      </p>
      {commentsInfo.map((e) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <CommentCard {...e} key={`${e.name}-${e.amount}`} />
      ))}
      <div className="cta">
        <p className="cta__text">
          Tu tambien puedes tomar acción y ayudar a
          <span className="cta__name">{name}</span>
        </p>
        <button
          type="button"
          className="cta__button boton btn btn-primary btn-sm"
          onClick={() => navigate('/donate')}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Comments;
