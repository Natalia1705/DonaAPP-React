import { Formik } from 'formik';
import { useEffect } from 'react';
import { Form, Row } from 'react-bootstrap';
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
          dispatch(setLogin());
          resetForm({ values: '' });
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
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
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div>
              {loading && <div>Cargando ...</div>}
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Iniciar Sesion
              </button>
            </div>
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
          message="Ocurrio un problema, intente de nuevo mas tarde"
        />
      )}
    </>
  );
};

export default SignInForm;
