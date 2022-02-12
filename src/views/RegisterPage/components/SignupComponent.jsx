import { Formik, Field, Form } from 'formik';
// import { Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import LoaderComponent from '../../../common/LoaderComponent';
/* import { setLogin } from '../../../state/auth/navBarLoginSlice'; */
import MessageComponent from '../../../common/MessageComponent';
import { postSignUp } from '../../../thunkAction/authThunk';
import useSignup from '../hooks/useSignup';
import Auth from '../../../utils/Auth';

const SignupFormComponent = () => {
  const { validationSchema } = useSignup();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userExists = { msg: 'The user already exists' };
  const loading = useSelector((state) => state.authReducer.loading);
  const user = useSelector((state) => state.authReducer.user);
  const error = useSelector((state) => state.authReducer.error);
  useEffect(() => {
    if (Auth.isLogin()) {
      navigate('/campaigns');
    }
  }, [user]);
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          surname: 'fake',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(postSignUp(values));
          swal({
            title: '¡Estás a un solo paso de terminar tu registro!',
            text: 'Revisa tu correo electrónico para validar tu cuenta',
            icon: 'success',
            value: true,
            visible: true,
            className: 'swal-register-modal',
            closeModal: true,
          });
          /* dispatch(setLogin()); */
          resetForm({ values: '' });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="inputBx">
              <span>Nombre de Usuario</span>
              <Field name="name" type="text" data-cy="register-name-input" />
              {errors.name && touched.name ? <span>{errors.name}</span> : null}
            </div>
            <div className="inputBx">
              <span>Correo Electrónico</span>
              <Field name="email" type="email" data-cy="register-email-input" />
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </div>
            <div className="inputBx">
              <span>Contraseña</span>
              <Field
                name="password"
                type="password"
                data-cy="register-password-input"
              />
              {errors.password && touched.password ? (
                <span>{errors.password}</span>
              ) : null}
            </div>
            <div className="inputBx">
              <span>Repita Contraseña</span>
              <Field
                name="confirmPassword"
                type="password"
                data-cy="register-repeat-password-input"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <span>{errors.confirmPassword}</span>
              ) : null}
            </div>
            <Button type="submit">Registrarse</Button>
          </Form>
        )}
      </Formik>
      <LoaderComponent loading={loading} />
      {user && (
        <MessageComponent
          variant="success"
          message="Se registro exitosamente!"
        />
      )}
      {error && (
        <MessageComponent
          variant="danger"
          message={
            JSON.stringify(error) === JSON.stringify(userExists)
              ? 'El usuario ya existe, por favor inicia sesión'
              : 'Ocurrio un problema, intente de nuevo mas tarde'
          }
          data-cy="register-error-text"
        />
      )}
    </>
  );
};

export default SignupFormComponent;

const Button = styled.button`
  background: #ff0157;
  color: #fff;
  font-size: 14px;
  display: inline-block;
  border: none;
  padding: 10px 10px;
  margin-top: 10px;
  margin-left: 25%;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    letter-spacing: 1px;
  }
`;
