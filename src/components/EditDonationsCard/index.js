/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import usePUT from '../../views/Edit/Hooks/usePUT';

const EditDonationsCard = ({ commentsDb, goal, campaignid }) => {
  const [editMode, setEditMode] = useState(false);
  const [userValues, setUserValues] = useState({});
  useEffect(() => {
    setUserValues({ commentsDb, goal });
  }, []);

  const navigate = useNavigate();
  const customWidth = () => {
    const commentMap = commentsDb.map((e) => e.amount);
    const commentReduce = commentMap.reduce(
      (acc, e) => Number(acc) + Number(e),
    );
    return `${
      (commentReduce / userValues.goal) * 100 >= 100
        ? 100
        : (commentReduce / userValues.goal) * 100
    }%`;
  };
  return (
    <div className="donations">
      {editMode ? (
        <Formik
          initialValues={{
            goal: userValues.goal,
          }}
          onSubmit={async (values) => {
            setUserValues({
              commentsDb: userValues.commentsDb,
              goal: values.goal,
            });
            setEditMode(false);
            usePUT(campaignid, { objective: values.goal });
          }}
        >
          <Form>
            <label htmlFor="goal">Change your objetive</label>
            <Field id="goal" name="goal" />
            <button type="submit" className="boton btn btn-secondary btn-lg">
              Guardar
            </button>
            <button
              type="button"
              className="boton btn btn-primary btn-lg"
              onClick={() => setEditMode(false)}
            >
              Cancelar
            </button>
          </Form>
        </Formik>
      ) : (
        <>
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
            <span className="amount">
              S./
              {commentsDb
                .map((e) => e.amount)
                .reduce((acc, e) => Number(acc) + Number(e))}
            </span>
            {` Recaudados del objetivo de S./ ${userValues.goal} `}
            <i
              className="fas fa-pen"
              role="switch"
              aria-checked="false"
              aria-labelledby="foo"
              tabIndex={0}
              onClick={() => setEditMode(true)}
            />
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
              onClick={() => navigate(`/donate/${campaignid}`)}
            >
              Donar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditDonationsCard;
