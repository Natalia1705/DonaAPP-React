/* eslint-disable react/jsx-indent */
/* eslint-disable no-else-return */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

function Form() {
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
  const FormTitles = ['StepOne', 'StepTwo', 'StepThree'];

  const PageDisplay = () => {
    if (page === 0) {
      return <StepOne formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <StepTwo formData={formData} setFormData={setFormData} />;
    } else {
      return <StepThree formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="body">{PageDisplay()}</div>
      <div className="footer">
        <button
          type="button"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert('FORM SUBMITTED');
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </>
  );
}

export default Form;
