import React from 'react';
import './style.scss';

const CommentCard = ({
  name = 'Anónimo',
  comment = 'Uno a uno todos somos mortales. Juntos, somos eternos.',
}) => (
  <div className="comment-card">
    <i className="fas fa-user-circle fa-3x" />
    <div className="comment-card__container">
      <p className="comment-card__donator">{name}</p>
      <p className="comment-card__text">{comment}</p>
    </div>
  </div>
);

export default CommentCard;
