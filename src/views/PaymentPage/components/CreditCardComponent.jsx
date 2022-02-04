import { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import {
  createCardAndCustomerThunk,
  makePaymentThunk,
} from '../../../thunkAction/paymentThunk';
// import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-datepicker/dist/react-datepicker.css';
import LoaderComponent from '../../../common/LoaderComponent';
import MessageComponent from '../../../common/MessageComponent';

const initialState = {
  cardCvc: '',
  expiry: null,
  name: '',
  cardNumber: '',
  monto: '',
};

const CreditCardComponent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.paymentReducer.loading);
  const error = useSelector((state) => state.paymentReducer.error);
  const success = useSelector((state) => state.paymentReducer.success);
  const resPayment = useSelector((state) => state.paymentReducer.resPayment);
  // const resCard = useSelector((state) => state.paymentReducer.resCard);
  // const [startDate, setStartDate] = useState(null);
  const [data, setData] = useState(initialState);
  // console.log('data ', data);

  useEffect(() => {
    // console.log('cambio resPayment');
  }, [resPayment]);

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
    // console.log('Enviando...');
    const cardData = {
      cardNumber: data.cardNumber,
      cardExpYear: data.expiry.getFullYear().toString(),
      cardExpMonth: (data.expiry.getMonth() + 1).toString(),
      cardCvc: data.cardCvc,
    };
    // console.log(cardData);
    // create credit card and customer
    dispatch(createCardAndCustomerThunk(cardData));
    setData(initialState);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    const paymentInfo = {
      docType: 'CC',
      docNumber: '10358519',
      city: 'Bogota',
      address: 'Cr 4 # 55 36',
      phone: '3005234321',
      cellPhone: '3010000001',
      bill: 'OR-1234',
      description: 'Test Payment',
      value: data.monto,
      tax: '16000',
      taxBase: '100000',
      currency: 'COP',
      dues: '12',
    };
    // console.log(paymentInfo);
    dispatch(makePaymentThunk(paymentInfo));
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
      {resPayment?.status === 'error' && (
        <MessageComponent
          variant="danger"
          message="Ocurrio un problema, intente de nuevo mas tarde."
        />
      )}
      {resPayment?.data?.estado === 'Aceptada' && (
        <MessageComponent
          variant="success"
          message="El pago se realizo correctamente!"
        />
      )}
      {error && (
        <MessageComponent
          variant="danger"
          message="Ocurrio un problema, intente de nuevo mas tarde"
        />
      )}
      {!success && (
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
      )}

      {success && (
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmitPayment}>
              <Card.Title className="mb-3">Monto de Pago</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Monto</Form.Label>
                <Form.Control
                  name="monto"
                  type="text"
                  placeholder="Monto"
                  onChange={handleInputChange}
                  value={data.monto}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Pagar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      <LoaderComponent loading={loading} />
    </div>
  );
};

export default CreditCardComponent;
