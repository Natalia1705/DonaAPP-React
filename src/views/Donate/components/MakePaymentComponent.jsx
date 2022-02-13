import React from 'react';
import { Button, Form } from 'react-bootstrap';

import useMakePayment from '../hooks/useMakePayment';

const MakePaymentComponent = ({ totalAmount, donateAmount, id }) => {
  const { dispatchMakePayment } = useMakePayment();
  const handleSubmitPayment = (e) => {
    e.preventDefault();
    dispatchMakePayment(totalAmount, donateAmount, id);
  };
  return (
    <div>
      <Form onSubmit={handleSubmitPayment}>
        <Button variant="primary" type="submit">
          Pagar
        </Button>
      </Form>
    </div>
  );
};

export default MakePaymentComponent;
