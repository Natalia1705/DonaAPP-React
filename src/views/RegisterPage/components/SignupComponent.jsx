import { Formik } from 'formik';
import { Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
          /* dispatch(setLogin()); */
          resetForm({ values: '' });
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="name">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                  data-cy="register-name-input"
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                  data-cy="register-email-input"
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                  data-cy="register-password-input"
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="confirmPassword">
                <Form.Label>Repita Contraseña</Form.Label>
                <Form.Control
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
                <Form.Control.Feedback type="invalid">
                  {formik.errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
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
