/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import CommentCard from '../CommentCard';
import usePUT from '../../views/Edit/Hooks/usePUT';
import './style.scss';
import Auth from '../../utils/Auth';

const Comments = ({ name, id, commentsDb, setNewcComment }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="comments">
      <p className="comments__title">
        {'Comentarios '}(<span>{commentsDb.length}</span>)
      </p>
      {commentsDb &&
        commentsDb.map((e) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <CommentCard {...e} key={`${e.name}-${commentsDb.indexOf(e)}`} />
        ))}
      <Formik
        initialValues={{
          firstName: '',
          newComment: '',
        }}
        onSubmit={async (values) => {
          setLoading(true);
          if (Auth.isLogin()) {
            await usePUT(id, {
              commentsDb: values.newComment,
            });
            await setNewcComment((prev) => !prev);
            setLoading(false);
          } else {
            setLoading(false);
            swal(
              'Upps',
              'Necesitas tener una sesión iniciada para comentar',
              'error',
            ).then(() => {
              swal.close();
            });
          }
        }}
      >
        <Form className="comment-form">
          <Field
            as="textarea"
            type="document"
            id="newComment"
            name="newComment"
            placeholder="Uno a uno todos somos mortales. Juntos, somos eternos."
            className="comment-form__comment-input"
          />
          <div className="comment-form__button-container">
            <button type="submit" className="boton btn btn-secondary btn-sm">
              Enviar
            </button>
            {loading && (
              <Spinner
                animation="border"
                role="status"
                className="comment-form__spinner"
              />
            )}
          </div>
        </Form>
      </Formik>
      <div className="cta">
        <p className="cta__text">
          Tu tambien puedes tomar acción y ayudar a
          <span className="cta__name"> {name}</span>
        </p>
      </div>
    </div>
  );
};

export default Comments;
