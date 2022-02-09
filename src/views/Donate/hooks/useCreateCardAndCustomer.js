import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { defaultState } from '../../../state/payment/paymentSlice';
import { createCardAndCustomerThunk } from '../../../thunkAction/paymentThunk';

const useCreateCardAndCustomer = () => {
  const dispatch = useDispatch();
  return {
    dispatchCreateCardAndCustomer: (values, expiry) => {
      const cardExpYear = expiry.getFullYear().toString();
      const cardExpMonth = (expiry.getMonth() + 1).toString();
      const cardData = {
        cardNumber: values.cardNumber,
        cardExpYear,
        cardExpMonth,
        cardCvc: values.cardCvc,
      };
      dispatch(createCardAndCustomerThunk(cardData))
        .unwrap()
        .catch(() => {
          swal('Ocurrio un problema', 'Intente de nuevo mas tarde', 'error');
          dispatch(defaultState());
        });
    },
  };
};

export default useCreateCardAndCustomer;
