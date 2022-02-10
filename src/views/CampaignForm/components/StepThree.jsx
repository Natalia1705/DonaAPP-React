/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import '../style.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import config from '../../../config';
import LoaderComponent from '../../../common/LoaderComponent';

const { URL_BASE } = config;

const stepThreeValidationSchema = Yup.object({
  title: Yup.string()
    .min(5, 'El título debe tener al menos 5 caracteres')
    .required('El título es necesario')
    .max(72, 'Tu nombre no debe contener mas de 72 caracteres'),
  description: Yup.string()
    .min(10, 'tu historia debe contener al menos 10 caracteres ')
    .required('La descripción de tu campaña es necesaria')
    .max(280, 'Tu nombre no debe contener mas de 280 caracteres'),
  img: Yup.string().required('Por favor ingresa una imagen'),
});
const StepThree = (props) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [previewSource, setPreviewSource] = useState('');
  const [secureUrl, setSecureUrl] = useState('holi');
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setPreviewSource(reader.result);
  };

  const uploadImage = async (base64EncodedImage) => {
    const base64 = JSON.stringify({ data: base64EncodedImage });
    try {
      const response = await fetch(`${URL_BASE}/files`, {
        method: 'POST',
        body: base64,
        headers: { 'Content-Type': 'application/json' },
      });
      const rta = await response.json();
      setSecureUrl(rta.secureUrl);
      setImgLoaded(false);
      console.log('Image uploaded successfully');
    } catch (err) {
      console.error(err);
      console.log('Something went wrong!');
    }
  };

  const handleSubmitFile = (e) => {
    const file = e.target.files[0];
    setImgLoaded(true);
    previewFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error('AHHHHHHHH!!');
      console.log('something went wrong!');
    };
  };
  const handleSubmit = async (values) => {
    await props.next(values);
  };
  return (
    <>
      <LoaderComponent loading={imgLoaded} />
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
                      data-cy="new-campaign-title-input"
                    />
                    <ErrorMessage name="title">
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
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
                        data-cy="new-campaign-description-input"
                      />
                      <ErrorMessage name="description">
                        {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="step__footer">
                    {previewSource && (
                      <img
                        src={previewSource}
                        alt="file name"
                        style={{
                          height: '90px',
                          width: '180px',
                          objectFit: 'contain',
                          margin: '0 0 5px 0 ',
                        }}
                      />
                    )}
                    <input
                      id="img"
                      type="file"
                      name="img"
                      value={values.img.filename}
                      data-cy="new-campaign-img-input"
                      onChange={async (e) => {
                        e.preventDefault();
                        handleSubmitFile(e);
                      }}
                    />

                    <button
                      type="button"
                      className="step__button step__button--back"
                      onClick={() => props.prev(values)}
                    >
                      Regresar
                    </button>
                    <button
                      type="submit"
                      className="step__button"
                      data-cy="new-campaign-submmit-input" // imgLoaded
                      onClick={() => {
                        setFieldValue('img', secureUrl);
                      }}
                    >
                      Terminar
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default StepThree;
