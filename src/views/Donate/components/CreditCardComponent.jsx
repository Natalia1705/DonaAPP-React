import { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {
  createCardAndCustomerThunk,
  makePaymentThunk,
} from '../../../thunkAction/paymentThunk';
// import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-datepicker/dist/react-datepicker.css';
import LoaderComponent from '../../../common/LoaderComponent';
import MessageComponent from '../../../common/MessageComponent';
import { defaultState } from '../../../state/payment/paymentSlice';

const initialState = {
  cardCvc: '',
  expiry: null,
  name: '',
  cardNumber: '',
  monto: '',
};

const CreditCardComponent = ({ totalAmount, id }) => {
  const dispatch = useDispatch();
  const { loading, error, success, resPayment } = useSelector(
    (state) => state.paymentReducer,
  );
  /* const loading = useSelector((state) => state.paymentReducer.loading);
  const error = useSelector((state) => state.paymentReducer.error);
  const success = useSelector((state) => state.paymentReducer.success);
  const resPayment = useSelector((state) => state.paymentReducer.resPayment); */
  // const resCard = useSelector((state) => state.paymentReducer.resCard);
  // const [startDate, setStartDate] = useState(null);
  const [data, setData] = useState(initialState);
  // console.log('data ', data);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    // console.log('cambio resPayment');
    if (resPayment?.data?.estado === 'Aceptada') {
      dispatch(defaultState());
      navigate(`/details/${id}?success=true`);
    }
    if (resPayment?.status === 'error' || error) {
      dispatch(defaultState());
      navigate(`/details/${id}?success=false`);
    }
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
    dispatch(createCardAndCustomerThunk(cardData))
      .unwrap()
      .catch(() => {
        swal('Ocurrio un problema', 'Intente de nuevo mas tarde', 'error');
        dispatch(defaultState());
      });
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
      value: totalAmount.toString(),
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
    <div id="PaymentForm">
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
        <Form onSubmit={handleSubmitContinue}>
          <h3 className="pb-2">Detalles de Pago</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="name"
              type="text"
              placeholder="Tu Nombre"
              onChange={handleInputChange}
              value={data.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="cardNumber"
              type="text"
              placeholder="Numero de Tarjeta"
              onChange={handleInputChange}
              value={data.cardNumber}
            />
          </Form.Group>
          <Row>
            <Col lg={8}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <DatePicker
                  className="form-control"
                  selected={data.expiry}
                  onChange={handleDateChange}
                  dateFormat="MM/yyyy"
                  minDate={new Date()}
                  showMonthYearPicker
                  placeholderText="Fecha de Expiracion"
                />
              </Form.Group>
            </Col>
            <Form.Group as={Col} controlId="formBasicEmail" className="mb-3">
              <Form.Control
                name="cardCvc"
                type="text"
                placeholder="CVC"
                onChange={handleInputChange}
                value={data.cardCvc}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Continuar
          </Button>
        </Form>
      )}

      {success && (
        <Form onSubmit={handleSubmitPayment}>
          <Button variant="primary" type="submit">
            Pagar
          </Button>
        </Form>
      )}

      <LoaderComponent loading={loading} />
    </div>
  );
};

export default CreditCardComponent;
