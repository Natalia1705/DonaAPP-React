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
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../utils/Auth';
import Modal from '../../components/Modal';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import config from '../../config';

const { URL_BASE } = config;

export default function CampaignForm() {
  // const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    name: '',
    country: '',
    category: '',
    objective: '',
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
    try {
      const session = await Auth.getSession();
      await axios.post(`${URL_BASE}/campaigns`, newData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.token}`,
        },
      });
      setModal(true);
    } catch (error) {
      console.log(error);
    }
    // navigate('/campaigns');
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

  return (
    <div>
      <Modal state={modal} turnState={setModal} />
      {steps[currentStep]}
    </div>
  );
}
