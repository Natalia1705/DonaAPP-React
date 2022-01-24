/* eslint-disable react/destructuring-assignment */
import '../style.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepTwoValidationSchema = Yup.object({
  objetive: Yup.number().required().label('Objetive'),
  targetdate: Yup.date().required().label('Objetive'),
});

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <div className="root">
          <Form action="" className="form-register">
            <div className="form-register__header">
              <ul className="progressbar">
                <li className="progressbar__option active" />
                <li className="progressbar__option active" />
                <li className="progressbar__option" />
              </ul>
              <h1 className="form-register__title">
                Establece el objetivo de tu campaña
              </h1>
            </div>
            <div className="form-register__body">
              <div className="step active" id="step-1">
                <div className="step__header" />
                <div className="step__body">
                  <p>¿Cuánto te gustaría recaudar?</p>
                  <Field
                    type="number"
                    name="objetive"
                    placeholder="USD"
                    className="step__input"
                  />
                  <ErrorMessage name="objetive" />
                  <p className="smalltext">
                    Ten en cuenta que de cada donativo se deducen comisiones por
                    transacción de pago, incluidos cargos por operaciones con
                    tarjetas de crédito y débito.
                  </p>
                  <p>¿Cuál es la fecha límite de recaudación?</p>
                  <Field
                    type="date"
                    name="targetdate"
                    className="step__input"
                  />
                </div>
                <div className="step__footer">
                  <button
                    type="button"
                    onClick={() => props.prev(values)}
                    className="step__button step__button--next"
                  >
                    Regresar
                  </button>
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

export default StepTwo;
