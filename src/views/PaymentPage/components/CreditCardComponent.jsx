import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { createCardTokenThunk } from '../../../thunkAction/paymentThunk';
// import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-datepicker/dist/react-datepicker.css';
import LoaderComponent from '../../../common/LoaderComponent';

const initialState = {
  cardCvc: '',
  expiry: null,
  name: '',
  cardNumber: '',
};

const CreditCardComponent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.paymentReducer.loading);
  const response = useSelector((state) => state.paymentReducer.dataPayment);
  // const [startDate, setStartDate] = useState(null);
  console.log(response);
  const [data, setData] = useState(initialState);
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleDateChange = (date) => {
    // setStartDate(date);
    setData({ ...data, expiry: date });
  };
  const handleSubmitContinue = (e) => {
    e.preventDefault();
    console.log('Enviando...');
    const cardData = {
      cardNumber: data.cardNumber,
      cardExpYear: data.expiry.getFullYear(),
      cardExpMonth: data.expiry.getMonth() + 1,
      cardCvc: data.cardCvc,
    };
    console.log(cardData);
    // create credit card
    dispatch(createCardTokenThunk(cardData));
    // create a customer
    setData(initialState);
  };

  return (
    <div id="PaymentForm" className="pt-5">
      {/* <Cards
        cvc={data.cvc}
        expiry={data.expiry}
        focus={data.focus}
        name={data.name}
        number={data.number}
      /> */}
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">Detalles de Pago</Card.Title>
          <Form onSubmit={handleSubmitContinue}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tu Nombre</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Tu Nombre"
                onChange={handleInputChange}
                value={data.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Numero de Tarjeta</Form.Label>
              <Form.Control
                name="cardNumber"
                type="text"
                placeholder="Numero de Tarjeta"
                onChange={handleInputChange}
                value={data.cardNumber}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Fecha de Expiración</Form.Label>
              <DatePicker
                className="form-control"
                selected={data.expiry}
                onChange={handleDateChange}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                placeholderText="Fecha de Expiracion"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                name="cardCvc"
                type="text"
                placeholder="CVC"
                onChange={handleInputChange}
                value={data.cardCvc}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Continuar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Form>
            <Card.Title className="mb-3">Monto de Pago</Card.Title>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                name="monto"
                type="text"
                placeholder="Monto"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled>
              Pagar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <LoaderComponent loading={loading} />
    </div>
  );
};

export default CreditCardComponent;
