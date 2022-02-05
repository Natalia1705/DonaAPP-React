/* eslint-disable react/destructuring-assignment */
import '../style.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Tu nombre debecontener al menos 2 caracteres ')
    .required('Por favor ingresa tu nombre')
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
      'Tu nombre no debe contener símbolos ni numeros',
    )
    .max(40, 'Tu nombre no debe contener mas de 40 caracteres'),
  country: Yup.string()
    .required('Por favor ingresa tu país')
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
      'Tu país no debe contener simbolos ni numeros',
    )
    .max(20, 'Tu país no debe contener mas de 20 caracteres'),
  category: Yup.string().required('Por favor selecciona una categoría '),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className="root">
          <Form action="" className="form-register">
            <div className="form-register__header">
              <ul className="progressbar">
                <li className="progressbar__option active" />
                <li className="progressbar__option" />
                <li className="progressbar__option" />
              </ul>
              <h1 className="form-register__title">Inicia tu campaña</h1>
            </div>
            <div className="form-register__body">
              <div className="step active" id="step-1">
                <div className="step__body">
                  <p>Nombre</p>
                  <Field
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ej. Juan Perez"
                    className="step__input"
                  />
                  <ErrorMessage name="name">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <p>¿Dónde vives?</p>
                  <Field
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Ingresa el nombre de tu país"
                    className="step__input"
                  />
                  <ErrorMessage name="country">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <p>¿Para que estás recaudando fondos?</p>
                  <Field
                    name="category"
                    as="select"
                    id="category"
                    select="health"
                    className="step__input"
                  >
                    <option>Selecciona una categoría</option>
                    <option value="Salud">Salud</option>
                    <option value="In memorium">In memoriam</option>
                    <option value="Mascotas">Animales</option>
                    <option value="Otros">Otros</option>
                  </Field>
                  <ErrorMessage name="category">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="step__footer">
                  <button type="submit" className="step__button">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default StepOne;
