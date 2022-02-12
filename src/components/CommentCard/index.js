import React from 'react';
import './style.scss';

const CommentCard = ({
  name = 'Anónimo',
  comment = 'Uno a uno todos somos mortales. Juntos, somos eternos.',
}) => (
  <div className="comment-card">
    <i className="fas fa-user-circle fa-3x comment-card__donator__img" />
    <p className="comment-card__donator">{name} :</p>
    <p className="comment-card__text">{comment}</p>
  </div>
);

export default CommentCard;
