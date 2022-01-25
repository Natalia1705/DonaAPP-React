/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import '../style.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepThreeValidationSchema = Yup.object({
  title: Yup.string().required().label('Title'),
  img: Yup.string().label('Img'),
});

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
    console.log(values);
  };

  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <div className="root">
          <Form className="form-register">
            <div className="form-register__header">
              <ul className="progressbar">
                <li className="progressbar__option active" />
                <li className="progressbar__option active" />
                <li className="progressbar__option active" />
              </ul>
              <h1 className="form-register__title">Cuenta tu historia</h1>
            </div>
            <div className="form-register__body">
              <div className="step active" id="step-1">
                <div className="step__header" />
                <div className="step__body">
                  <p>¿Cuál es el titulo de tu campaña?</p>
                  <Field
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Título"
                    className="step__input"
                  />
                  <ErrorMessage name="title" />
                  <p>
                    ¿Porque vas a recaudar fondos?Cuántanos tu historia
                    *Recuerda agregar una imagen
                  </p>
                  <div className="editor de texto">
                    <Field
                      id="description"
                      type="document"
                      name="description"
                      className="step__input"
                    />
                    <ErrorMessage name="description" />
                  </div>
                </div>
                <div className="step__footer">
                  <input
                    id="img"
                    name="img"
                    type="file"
                    className="step__input"
                  />
                  <button
                    type="button"
                    className="step__button step__button--back"
                    onClick={() => props.prev(values)}
                  >
                    Regresar
                  </button>
                  <button type="submit" className="step__button">
                    Terminar
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

export default StepThree;
