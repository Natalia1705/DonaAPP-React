/* eslint-disable react/destructuring-assignment */
import '../style.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object({
  name: Yup.string().required().label('Name '),
  country: Yup.string().required().label('Your Country'),
  category: Yup.string().required('Select a Category'),
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
                    type="text"
                    name="name"
                    placeholder="Ej. Juan Perez"
                    className="step__input"
                  />
                  <ErrorMessage name="name" />
                  <p>¿Dónde vives?</p>
                  <Field
                    type="text"
                    name="country"
                    placeholder="Ingresa el nombre de tu país"
                    className="step__input"
                  />
                  <ErrorMessage name="country" />
                  <p>¿Para que estás recaudando fondos?</p>
                  <Field
                    name="category"
                    as="select"
                    select
                    className="step__input"
                  >
                    <option value="health">Salud</option>
                    <option value="emergency">Emergencias</option>
                    <option value="funerals">In memoriam</option>
                    <option value="animals">Animales</option>
                  </Field>
                  <ErrorMessage name="category" />
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
