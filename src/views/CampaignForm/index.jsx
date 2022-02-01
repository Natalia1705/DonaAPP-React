/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
import './style.scss';
import axios from 'axios';
import Auth from '../../utils/Auth';
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

  const submitHandler = async (newData) => {
    console.log('sesion :', Auth.getSession());
    console.log('newData :', newData);
    axios
      .post(
        'https://fast-shelf-59848.herokuapp.com/api/campaigns' /* 'http://localhost:5000/api/campaigns' */,
        newData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            usertoken: Auth.getSession().token,
          },
        },
      )
      .catch((error) => {
        console.log(error);
      });
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
      next={submitHandler}
      prev={handlePrevStep}
      data={data}
    />,
  ];

  return <div>{steps[currentStep]}</div>;
}
