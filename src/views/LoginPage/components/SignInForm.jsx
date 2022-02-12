import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
// import { Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoaderComponent from '../../../common/LoaderComponent';
import MessageComponent from '../../../common/MessageComponent';
import { postSignIn } from '../../../thunkAction/authThunk';
import { setLogin } from '../../../state/auth/navBarLoginSlice';
import Auth from '../../../utils/Auth';
import useSignin from '../hook/useSignin';

const SignInForm = () => {
  const { validationSchema } = useSignin();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const user = useSelector((state) => state.authReducer.user);
  const error = useSelector((state) => state.authReducer.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (Auth.isLogin()) {
      navigate('/campaigns');
    }
    if (user) {
      Auth.saveSession(user);
      navigate('/campaigns');
    }
  }, [user]);
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(postSignIn(values));
          if (user) {
            dispatch(setLogin());
          }

          resetForm({ values: '' });
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
            <Button type="submit">Registrarse</Button>
          </Form>
        )}
      </Formik>
      <LoaderComponent loading={loading} />
      {user && (
        <MessageComponent
          variant="success"
          message="Inicio Sesión exitosamente!"
        />
      )}
      {error && (
        <MessageComponent
          variant="danger"
          message={
            JSON.stringify(error) === 'true'
              ? 'Ocurrio un problema, intente de nuevo mas tarde'
              : error
          }
        />
      )}
    </>
  );
};

export default SignInForm;

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
