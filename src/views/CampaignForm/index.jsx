/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import './style.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function CampaignForm() {
  const [data, setData] = useState({
    name: '',
    country: '',
    category: '',
    objetive: '',
    targetdate: '',
    title: '',
    img: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log('Form Submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log('data', data);

  return <div>{steps[currentStep]}</div>;
}

const stepOneValidationSchema = Yup.object({
  name: Yup.string().required().label('Name '),
  country: Yup.string().required().label('Your Country'),
  category: Yup.string().required('Select a Category'),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className="root">
          <Form action="" className="form-register">
            <div className="form-register__header">
              <ul className="progressbar">
                <li className="progressbar__option active" />
                <li className="progressbar__option" />
                <li className="progressbar__option" />
              </ul>
              <h1 className="form-register__title">Inicia tu campaña</h1>
            </div>
            <div className="form-register__body">
              <div className="step active" id="step-1">
                <div className="step__body">
                  <p>Nombre</p>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Ej. Juan Perez"
                    className="step__input"
                  />
                  <ErrorMessage name="name" />
                  <p>¿Dónde vives?</p>
                  <Field
                    type="text"
                    name="country"
                    placeholder="Ingresa el nombre de tu país"
                    className="step__input"
                  />
                  <ErrorMessage name="country" />
                  <p>¿Para que estás recaudando fondos?</p>
                  <Field
                    name="category"
                    as="select"
                    select
                    className="step__input"
                  >
                    <option value="health">Salud</option>
                    <option value="emergency">Emergency</option>
                    <option value="funerals">In memoriam</option>
                    <option value="animals">Animales</option>
                  </Field>
                  <ErrorMessage name="category" />
                </div>
                <div className="step__footer">
                  <button type="submit" className="step__button">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

const stepTwoValidationSchema = Yup.object({
  objetive: Yup.number().required().label('Objetive'),
  targetdate: Yup.date().min(
    Yup.ref('originalEndDate'),
    ({ min }) => `Date needs to be before ${formatDate(min)}!!`,
  ),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <div className="root">
          <Form action="" className="form-register">
            <div className="form-register__header">
              <ul className="progressbar">
                <li className="progressbar__option active" />
                <li className="progressbar__option active" />
                <li className="progressbar__option" />
              </ul>
              <h1 className="form-register__title">
                Establece el objetivo de tu campaña
              </h1>
            </div>
            <div className="form-register__body">
              <div className="step active" id="step-1">
                <div className="step__header" />
                <div className="step__body">
                  <p>¿Cuánto te gustaría recaudar?</p>
                  <Field
                    type="number"
                    name="objetive"
                    placeholder="USD"
                    className="step__input"
                  />
                  <ErrorMessage name="objetive" />
                  <p className="smalltext">
                    Ten en cuenta que de cada donativo se deducen comisiones por
                    transacción de pago, incluidos cargos por operaciones con
                    tarjetas de crédito y débito.
                  </p>
                  <p>¿Cuál es la fecha límite de recaudación?</p>
                  <input
                    type="date"
                    name="targetdate"
                    className="step__input"
                  />
                  <ErrorMessage name="targetdate" />
                </div>
                <div className="step__footer">
                  <button
                    type="button"
                    onClick={() => props.prev(values)}
                    className="step__button step__button--next"
                  >
                    Regresar
                  </button>
                  <button
                    type="submit"
                    className="step__button step__button--back"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
const stepThreeValidationSchema = Yup.object({
  title: Yup.string().required().email().label('Title'),
  img: Yup.string().required().label('Img'),
});

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className="root">
          <form className="form-register">
            <div className="form-register__header">
              <ul className="progressbar">
                <li className="progressbar__option active" />
                <li className="progressbar__option active" />
                <li className="progressbar__option active" />
              </ul>
              <h1 className="form-register__title">Cuenta tu historia</h1>
            </div>
            <div className="form-register__body">
              <div className="step active" id="step-1">
                <div className="step__header" />
                <div className="step__body">
                  <p>¿Cuál es el titulo de tu campaña?</p>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Título"
                    className="step__input"
                  />
                  <ErrorMessage name="title" />
                  <p>
                    ¿Porque vas a recaudar fondos? *Recuerda agregar una imagen
                  </p>
                  <div className="editor de texto">
                    <textarea />
                  </div>
                </div>
                <div className="step__footer">
                  <button
                    type="button"
                    className="step__button step__button--back"
                    onClick={() => props.prev(values)}
                  >
                    Regresar
                  </button>
                  <button type="submit" className="step__button">
                    Terminar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};
