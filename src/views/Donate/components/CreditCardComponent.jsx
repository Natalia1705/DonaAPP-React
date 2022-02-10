import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-datepicker/dist/react-datepicker.css';
import LoaderComponent from '../../../common/LoaderComponent';
import MessageComponent from '../../../common/MessageComponent';
import { defaultState } from '../../../state/payment/paymentSlice';
import CreditCardFormComponent from './CreditCardFormComponent';
import MakePaymentComponent from './MakePaymentComponent';

const CreditCardComponent = ({ totalAmount, donateAmount, id }) => {
  const dispatch = useDispatch();
  const { loading, error, success, resPayment } = useSelector(
    (state) => state.paymentReducer,
  );
  const navigate = useNavigate();

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
      {!success && <CreditCardFormComponent totalAmount={totalAmount} />}
      {success && (
        <MakePaymentComponent
          totalAmount={totalAmount}
          donateAmount={donateAmount}
          id={id}
        />
      )}
      <LoaderComponent loading={loading} />
    </div>
  );
};

export default CreditCardComponent;
