import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Formik } from 'formik';
import useCreditCardSchema from '../hooks/useCreditCardSchema';
import useCreateCardAndCustomer from '../hooks/useCreateCardAndCustomer';
import 'react-datepicker/dist/react-datepicker.css';

const CreditCardFormComponent = () => {
  const [expiry, setExpiry] = useState(null);
  const { initialValues, validationSchema } = useCreditCardSchema();
  const { dispatchCreateCardAndCustomer } = useCreateCardAndCustomer();
  const handleExpiryChange = (values) => {
    setExpiry(values);
  };
  const handleSubmitContinue = (values, { resetForm }) => {
    dispatchCreateCardAndCustomer(values, expiry);
    resetForm({ values: '' });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitContinue}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <h3 className="pb-2">Detalles de Pago</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="name"
                type="text"
                placeholder="Tu Nombre"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                isInvalid={formik.touched.name && formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="cardNumber"
                type="text"
                placeholder="Numero de Tarjeta"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                isInvalid={
                  formik.touched.cardNumber && formik.errors.cardNumber
                }
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.cardNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col lg={8}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <DatePicker
                    className="form-control"
                    selected={expiry}
                    onChange={handleExpiryChange}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardCvc}
                  isInvalid={formik.touched.cardCvc && formik.errors.cardCvc}
                />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                {formik.errors.cardCvc}
              </Form.Control.Feedback>
            </Row>
            <Button
              variant="primary"
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
            >
              Continuar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreditCardFormComponent;
