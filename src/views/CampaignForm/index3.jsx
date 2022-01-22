/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss';

const CampaignForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    category: '',
    objetive: '',
    targetdate: '',
    title: '',
    img: '',
  });

  const FormTitles = [
    'Inicia tu campaña',
    ' Establece el objetivo de tu campaña',
    'Cuenta tu historia',
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formData={formData} setFormData={setFormData} />;
    }
    if (page === 1) {
      return <Step2 formData={formData} setFormData={setFormData} />;
    }
    return <Step3 formData={formData} setFormData={setFormData} />;
  };

  return (
    <div className="root">
      <div className="form-register">
        <div className="form-register__header">
          <ul className="progressbar">
            <li className="progressbar__option" />
            <li className="progressbar__option " />
            <li className="progressbar__option" />
          </ul>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="step__footer">
          <button
            className="step__button step__button--next"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Regresar
          </button>

          <button
            className="step__button step__button--back"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert('FORM SUBMITTED');
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? 'Envíar' : 'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignForm;
