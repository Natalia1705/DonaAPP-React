/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    <Container>
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
            <Form className="CampaignObjectiveForm">
              <label htmlFor="goal">Nuevo objetivo</label>
              <Field id="goal" name="goal" className="CampaignObjectiveInput" />
              <div>
                <button
                  type="submit"
                  className="boton btn btn-secondary btn-lg"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="boton btn btn-primary btn-lg"
                  onClick={() => setEditMode(false)}
                >
                  Cancelar
                </button>
              </div>
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
              <Pen
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
    </Container>
  );
};

const Container = styled.div`
  .CampaignObjectiveForm {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .CampaignObjectiveInput {
      padding: 8px;
      text-align: center;
    }
    div {
      display: flex;
      justify-content: space-around;
      gap: 8px;
    }
  }
`;
const Pen = styled.div`
  cursor: pointer;
`;
export default EditDonationsCard;
