/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import CommentCard from '../CommentCard';
import usePUT from '../../views/Edit/Hooks/usePUT';
import './style.scss';

const Comments = ({ name, commentsDb, id }) => {
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
      {commentsInfo &&
        commentsInfo.map((e) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <CommentCard {...e} key={`${e.name}`} /> // agregar id
        ))}
      <Formik
        initialValues={{
          firstName: '',
          newComment: '',
        }}
        onSubmit={async (values) => {
          console.log('enviado!', values);
          usePUT(id, { commentsDb: [values.firstName, values.newComment] });
        }}
      >
        <Form>
          <label htmlFor="firstName">Your name</label>
          <Field id="firstName" name="firstName" placeholder="June" />
          <label htmlFor="newComment">Comentario</label>
          <Field
            as="textarea"
            type="document"
            id="newComment"
            name="newComment"
            placeholder="Uno a uno todos somos mortales. Juntos, somos eternos."
          />
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
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
