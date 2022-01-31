/* eslint-disable react/destructuring-assignment */
import '../style.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const stepThreeValidationSchema = Yup.object({
  title: Yup.string().required().label('Title'),
});
const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const [previewSource, setPreviewSource] = useState();

  //   const data = new FormData();
  //   console.log(FormData);
  //   data.append('file', files[0]);
  //   data.append('uploal_preset', 'donapp');
  //   try {
  //     axios.post(
  //       'https://fast-shelf-59848.herokuapp.com/api/campaigns',
  //       FormData,
  //       config,
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleSubmit = (values) => {
  //   uploadImage(previewSource);
  //   props.next(values);
  // };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setPreviewSource(reader.result);
  };

  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
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
                  {previewSource && (
                    <img
                      src={previewSource}
                      alt="file name"
                      style={{ height: '140px', width: '290px' }}
                    />
                  )}
                  <input
                    id="img"
                    type="file"
                    name="img"
                    value={values.img.filename}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFieldValue('img', file);
                      previewFile(file);
                    }}
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
