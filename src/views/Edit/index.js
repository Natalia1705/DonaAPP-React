/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import Comments from '../../components/Comments';
import EditDonationsCard from '../../components/EditDonationsCard';
import ShareModal from '../../components/ShareModal';
import usePUT from './Hooks/usePUT';
import './styles.scss';
import config from '../../config';

const { URL_BASE } = config;

const Edit = () => {
  const { id } = useParams();
  const [imgEditMode, setImgEditMode] = useState(false);
  const [descriptionEditMode, setDescriptionEditMode] = useState(false);
  const [categoryEditMode, setCategoryEditMode] = useState(false);
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [secureUrl, setSecureUrl] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [campaignDetail, setCampaignDetail] = useState({});
  const [currentImg, setCurrentImg] = useState('');
  const [loading, setLoading] = useState(true);

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
      console.log('Image uploaded successfully');
    } catch (err) {
      console.error(err);
      console.log('Something went wrong!');
    }
  };
  const handleSubmitFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    console.log('HandleSubmitFile');
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

  useEffect(() => {
    setLoading(true);
    fetch(`${URL_BASE}/campaigns/${id}`, {
      /* headers: { usertoken: Auth.getSession().token }, */
    })
      .then((resp) => resp.json())
      .then(
        (data) => {
          setCampaignDetail(data.data);
          /* setcurrentImg(data.data.img); */
          setLoading(false);
        },
        /* setCampaignDetail(data.data.campaigns) */
      );
  }, []);
  const campaignDetails = {
    commentsDb: [
      {
        name: 'Fabrizzio DBC',
        amount: '1550.00',
        comment: 'Espero te sirva de mucho, cuídate!',
      },
      {
        name: 'Alberto C.',
        amount: '700.00',
        comment: 'Espero te sirva de mucho, cuídate!',
      },
      {
        name: 'Julieta Rabadilla',
        amount: '3500.00',
        comment: 'Espero te sirva de mucho, cuídate!',
      },
      {
        amount: '35.00',
      },
    ],
  };
  const { commentsDb } = campaignDetails;

  const [showMore, setShowMore] = useState(true);
  const showMoreToggle = () => {
    setShowMore(!showMore);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await usePUT(id, { img: secureUrl });
    setCurrentImg(secureUrl);
    setImgEditMode(false);
  };
  return (
    <Container>
      {loading ? (
        'cargando'
      ) : (
        <main className="details__main">
          <div className="campaign">
            {imgEditMode ? (
              <form onSubmit={(e) => formSubmitHandler(e)}>
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
                  /* value={currentImg} */
                  onChange={async (e) => {
                    e.preventDefault();
                    handleSubmitFile(e);
                  }}
                />
                <button type="submit">Guardar</button>
              </form>
            ) : (
              <>
                {' '}
                <img
                  className="campaign__img"
                  src={currentImg || campaignDetail.img}
                  alt={campaignDetail.title}
                />
                <i
                  className="fas fa-pen"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="foo"
                  tabIndex={0}
                  onClick={() => setImgEditMode(true)}
                />
              </>
            )}
            {titleEditMode ? (
              <Formik
                initialValues={{
                  title: campaignDetail.title,
                }}
                onSubmit={async (values) => {
                  setCampaignDetail({
                    ...campaignDetail,
                    title: values.title,
                  });
                  setTitleEditMode(false);
                  usePUT(id, { title: values.title });
                }}
              >
                <Form>
                  <label htmlFor="title">Change your title</label>
                  <Field id="title" name="title" />
                  <button
                    type="submit"
                    className="boton btn btn-secondary btn-lg"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="boton btn btn-primary btn-lg"
                    onClick={() => setTitleEditMode(false)}
                  >
                    Cancelar
                  </button>
                </Form>
              </Formik>
            ) : (
              <span>
                <p className="campaign__title">{campaignDetail.title}</p>
                <i
                  className="fas fa-pen"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="foo"
                  tabIndex={0}
                  onClick={() => setTitleEditMode(true)}
                />
              </span>
            )}
          </div>
          <EditDonationsCard
            campaignid={id}
            commentsDb={commentsDb}
            goal={campaignDetail.objective}
          />
          <div className="description">
            <div className="description__tags">
              {categoryEditMode ? (
                <Formik
                  initialValues={{
                    category: campaignDetail.category,
                  }}
                  onSubmit={async (values) => {
                    setCampaignDetail({
                      ...campaignDetail,
                      category: values.category,
                    });
                    setCategoryEditMode(false);
                    usePUT(id, { category: values.category });
                  }}
                >
                  <Form>
                    <label htmlFor="category">Change your category</label>
                    <Field
                      name="category"
                      as="select"
                      id="category"
                      select={campaignDetail.category}
                      className="step__input"
                      data-cy="new-campaign-category-input"
                    >
                      <option value="Salud">Salud</option>
                      <option value="In memorium">In memoriam</option>
                      <option value="Mascotas">Animales</option>
                      <option value="Otros">Otros</option>
                    </Field>
                    <button
                      type="submit"
                      className="boton btn btn-secondary btn-lg"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      className="boton btn btn-primary btn-lg"
                      onClick={() => setCategoryEditMode(false)}
                    >
                      Cancelar
                    </button>
                  </Form>
                </Formik>
              ) : (
                <p>
                  <i className="fas fa-tags" />
                  {campaignDetail.category}{' '}
                  <i
                    className="fas fa-pen"
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="foo"
                    tabIndex={0}
                    onClick={() => setCategoryEditMode(true)}
                  />
                </p>
              )}
            </div>
            <div className="description__content">
              {descriptionEditMode ? (
                <Formik
                  initialValues={{
                    description: campaignDetail.description,
                  }}
                  onSubmit={async (values) => {
                    setCampaignDetail({
                      ...campaignDetail,
                      description: values.description,
                    });
                    setDescriptionEditMode(false);
                    usePUT(id, { description: values.description });
                  }}
                >
                  <Form>
                    <label htmlFor="description">Change your description</label>
                    <Field
                      id="description"
                      name="description"
                      type="document"
                    />
                    <button
                      type="submit"
                      className="boton btn btn-secondary btn-lg"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      className="boton btn btn-primary btn-lg"
                      onClick={() => setDescriptionEditMode(false)}
                    >
                      Cancelar
                    </button>
                  </Form>
                </Formik>
              ) : (
                <>
                  <p>
                    {campaignDetail.description
                      .split(' ')
                      .slice(0, 19)
                      .join(' ')}
                    {showMore ? (
                      <span id="dots">...</span>
                    ) : (
                      <span id="more">
                        {campaignDetail.description
                          .split(' ')
                          .slice(
                            20,
                            campaignDetail.description.split(' ').length,
                          )
                          .join(' ')}
                      </span>
                    )}
                  </p>
                  <button
                    type="button"
                    className="boton btn btn-secondary btn-sm"
                    onClick={showMoreToggle}
                  >
                    {showMore ? 'Read more' : 'Read less'}
                  </button>
                  <i
                    className="fas fa-pen"
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="foo"
                    tabIndex={0}
                    onClick={() => setDescriptionEditMode(true)}
                  />
                </>
              )}
            </div>
            <Comments name={campaignDetail.name} commentsDb={commentsDb} />
            <ShareModal />
          </div>
        </main>
      )}
    </Container>
  );
};

export default Edit;

const Container = styled.div``;
