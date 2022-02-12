import { Formik } from 'formik';
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
    /*     if (user) {
      Auth.saveSession(user);
      navigate('/campaigns');
    } */
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
        {(formik) => (
          <FormContent onSubmit={formik.handleSubmit}>
            <div className="inputBx">
              <span>Nombre de Usuario</span>
              <input
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                isInvalid={formik.touched.name && formik.errors.name}
                data-cy="register-name-input"
              />
              <span>{formik.errors.name}</span>
            </div>
            <div className="inputBx">
              <span>Correo Electrónico</span>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
                data-cy="register-email-input"
              />
              <span>{formik.errors.email}</span>
            </div>
            <div className="inputBx">
              <span>Contraseña</span>
              <input
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                isInvalid={formik.touched.password && formik.errors.password}
                data-cy="register-password-input"
              />
              <span>{formik.errors.password}</span>
            </div>
            <div className="inputBx">
              <span>Repita Contraseña</span>
              <input
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                isInvalid={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                data-cy="register-repeat-password-input"
              />
              <span>{formik.errors.confirmPassword}</span>
            </div>
            <div>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                data-cy="register-submmit-button"
              >
                Registrarse
              </button>
            </div>
          </FormContent>
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

const FormContent = styled.form``;
