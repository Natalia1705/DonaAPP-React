import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useSignin = () => {
  const [validationSchema, setValidationSchema] = useState({});
  useEffect(() => {
    setValidationSchema(
      Yup.object({
        email: Yup.string()
          .email('Correo Electrónico invalido')
          .required('Correo Electrónico es requerido'),
        password: Yup.string().required('Por favor, introduzca su contraseña'),
      }),
    );
  }, []);
  return { validationSchema };
};

export default useSignin;
