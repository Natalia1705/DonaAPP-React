/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import './style.scss';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

export default function App() {
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
    <Step1 next={handleNextStep} data={data} />,
    <Step2 next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Step3 next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log('data', data);

  return <div className="App">{steps[currentStep]}</div>;
}

// const step1ValidationSchema = Yup.object({
//   first_name: Yup.string().required().label('First name'),
//   last_name: Yup.string().required().label('Last name'),
// });

const Step1 = () => {
  // const handleSubmit = (values) => {
  //   props.next(values);
  // };
  return (
    <div className="root">
      <form action="" className="form-register">
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
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Tu nombre ej:Juan Pérez"
                className="step__input"
              />
              <p>¿Dónde vives?</p>
              <input />
              <p>¿Para que estás recaudando fondos?</p>
              <select>
                <option value="health">Salud</option>
                <option value="emergency">Emergency</option>
                <option value="funerals">In memoriam</option>
                <option value="animals">Animales</option>
              </select>
            </div>
            <div className="step__footer">
              <button className="step__button step__button--next">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const Step2 = () => {
  return (
    <div className="form-register__body">
      <div className="step active" id="step-2">
        <div className="step__header" />
        <div className="step__body">
          <p>¿Cuánto te gustaría recaudar?</p>
          <input
            type="number"
            name="objetive"
            // value={data.objetive}
            // onChange={(e) => {
            //   setData({ ...data, objetive: e.target.value });
            // }}
            id="objetive"
            placeholder="USD"
            className="step__input"
          />
          <p className="smalltext">
            Ten en cuenta que de cada donativo se deducen comisiones por
            transacción de pago, incluidos cargos por operaciones con tarjetas
            de crédito y débito.
          </p>
          <p>¿Cuál es la fecha límite de recaudación?</p>
          <input
            type="date"
            name="targetdate"
            // value={data.targetdate}
            // onChange={(e) => {
            //   setData({ ...data, targetdate: e.target.value });
            // }}
            id="targetdate"
            placeholder=""
            className="step__input"
          />
        </div>
      </div>
    </div>
  );
};
const Step3 = () => {
  return (
    <div className="form-register__body">
      <div className="step active" id="step-3">
        <div className="step__header" />
        <div className="step__body">
          <p>¿Cuál es el titulo de tu campaña?</p>
          <input
            type="text"
            name="title"
            // value={data.title}
            // onChange={(e) => {
            //   setdata({ ...data, title: e.target.value });
            // }}
            id="title"
            placeholder="Título"
            className="step__input"
          />
          <p>¿Porque vas a recaudar fondos? </p>
          <div className="editor de texto">
            <textarea />
          </div>
          <p>Recuerda agregar una imagen</p>
          <input
            type="file"
            name="img"
            // value={data.img}
            // onChange={(e) => {
            //   setFormData({ ...data, img: e.target.value });
            // }}
            id="img"
          />
        </div>
      </div>
    </div>
  );
};
