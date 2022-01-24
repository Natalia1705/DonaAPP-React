/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import './style.scss';
import axios from 'axios';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

export default function CampaignForm() {
  const [data, setData] = useState({
    name: '',
    country: '',
    category: '',
    objetive: '',
    targetdate: '',
    title: '',
    description: '',
    img: '',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = async (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = async (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };
  const SubmitHandler = async (formData) => {
    axios.post('localhost/donapp/create', formData);
  };

  const steps = [
    <StepOne key="StepOne" next={handleNextStep} data={data} />,
    <StepTwo
      key="StepTwo"
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
    <StepThree
      key="StepThree"
      next={SubmitHandler}
      prev={handlePrevStep}
      data={data}
    />,
  ];

  return <div>{steps[currentStep]}</div>;
}