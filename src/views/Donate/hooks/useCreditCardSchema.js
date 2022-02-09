import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  cardNumber: '',
  cardCvc: '',
};

const useCreditCardSchema = () => {
  const [validationSchema, setValidationSchema] = useState({});
  useEffect(() => {
    setValidationSchema(
      Yup.object({
        name: Yup.string().required('Nombre es requerido'),
        cardNumber: Yup.string()
          .required('Por favor, introduzca su numero de tarjeta')
          .max(16),
        cardCvc: Yup.string().min(3).max(4).required('Cvc es requerido'),
      }),
    );
  }, []);
  return { initialValues, validationSchema };
};

export default useCreditCardSchema;
