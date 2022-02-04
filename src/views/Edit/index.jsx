/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import { useEffect, useState } from 'react';
import './style.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Auth from '../../utils/Auth';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    setLoading(true);
    fetch(`https://fast-shelf-59848.herokuapp.com/api/campaigns/${id}`, {
      /* headers: { usertoken: Auth.getSession().token }, */
    })
      .then((resp) => resp.json())
      .then((rta) => {
        const {
          name,
          country,
          category,
          objetive,
          targetdate,
          title,
          description,
          img,
        } = rta.data;
        setData({
          name,
          country,
          category,
          objetive,
          targetdate: targetdate.split('T')[0],
          title,
          description,
          img,
        });
        console.log(rta.data);
        setLoading(false);
      });
  }, []);

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
    await fetch(
      `https://fast-shelf-59848.herokuapp.com/api/campaigns/${id}` /* `http://localhost:5000/api/campaigns/${id}` */,
      {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(newData), // data can be `string` or {object}!
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          usertoken: Auth.getSession().token,
        },
      },
    )
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response));
    navigate('/campaigns');
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

  return loading ? 'cargando' : <div>{steps[currentStep]}</div>;
}
