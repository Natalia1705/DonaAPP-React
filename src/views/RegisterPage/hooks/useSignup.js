import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useSignup = () => {
  const [validationSchema, setValidationSchema] = useState({});
  useEffect(() => {
    setValidationSchema(
      Yup.object({
        name: Yup.string()
          .max(15, 'Debe tener 15 caracteres o menos')
          .required('Nombre de Usuario es requerido'),
        email: Yup.string()
          .email('Correo Electrónico invalido')
          .required('Correo Electrónico es requerido'),
        password: Yup.string()
          .required('Por favor, introduzca su contraseña')
          .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Debe contener 8 caracteres, una mayúscula, una minúscula, un número y un carácter en caso especial',
          ),
        confirmPassword: Yup.string()
          .required('Repita Contraseña es requerido')
          .oneOf(
            [Yup.ref('password'), null],
            'Las contraseñas deben coincidir',
          ),
      }),
    );
  }, []);
  return { validationSchema };
};

export default useSignup;
