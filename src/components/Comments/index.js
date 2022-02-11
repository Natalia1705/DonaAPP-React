/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import swal from 'sweetalert';
import CommentCard from '../CommentCard';
import usePUT from '../../views/Edit/Hooks/usePUT';
import './style.scss';
import Auth from '../../utils/Auth';
import LoaderComponent from '../../common/LoaderComponent';

const Comments = ({ name, commentsDb, id }) => {
  const navigate = useNavigate();
  const [commentPosted, setCommentPosted] = useState(false);
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
      <LoaderComponent loading={commentPosted} />
      <Formik
        initialValues={{
          firstName: '',
          newComment: '',
        }}
        onSubmit={async (values) => {
          setCommentPosted(true);
          if (Auth.isLogin()) {
            await usePUT(id, {
              commentsDb: values.newComment,
            });
            setCommentPosted(false);
          } else {
            setCommentPosted(false);
            swal(
              'Upps',
              'Necesitas tener una sesión iniciada para comentar',
              'error',
            ).then(() => {
              swal.close();
              /* navigate('/login'); */
            });
          }
        }}
      >
        <Form className="comment-form">
          <label htmlFor="newComment" className="comment-form__label">
            Comentario
          </label>
          <Field
            as="textarea"
            type="document"
            id="newComment"
            name="newComment"
            placeholder="Uno a uno todos somos mortales. Juntos, somos eternos."
            className="comment-form__comment-input"
          />
          <button type="submit" className="boton btn btn-secondary btn-sm">
            Enviar
          </button>
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
