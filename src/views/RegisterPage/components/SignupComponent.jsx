import { Formik } from 'formik';
import { Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postSignUp } from '../../../thunkAction/authThunk';
import useSignup from '../hooks/useSignup';

const SignupFormComponent = () => {
  const { validationSchema } = useSignup();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        surname: 'fake',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => dispatch(postSignUp(values))}
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
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div>
            <button className="btn btn-primary" type="submit">
              Registrarse
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormComponent;
