import { useDispatch } from 'react-redux';
import { makePaymentThunk } from '../../../thunkAction/paymentThunk';

const useMakePayment = () => {
  const dispatch = useDispatch();
  return {
    dispatchMakePayment: (totalAmount, donateAmount, id) => {
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
        donateAmount,
        campaignId: id,
      };
      dispatch(makePaymentThunk(paymentInfo));
    },
  };
};

export default useMakePayment;
