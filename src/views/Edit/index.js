/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import EditDonationsCard from '../../components/EditDonationsCard';
import ShareModal from '../../components/ShareModal';
import usePUT from './Hooks/usePUT';
import './styles.scss';
import config from '../../config';
import LoaderComponent from '../../common/LoaderComponent';

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
        <LoaderComponent loading />
      ) : (
        <main className="details__main">
          <div className="campaign">
            {imgEditMode ? (
              <ImgInput onSubmit={(e) => formSubmitHandler(e)}>
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
                <div>
                  <button
                    type="submit"
                    className="boton btn btn-primary btn-lg"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="boton btn btn-secondary btn-lg"
                    onClick={() => setImgEditMode(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </ImgInput>
            ) : (
              <CampaignImgContainer>
                {' '}
                <img
                  className="campaign__img"
                  src={currentImg || campaignDetail.img}
                  alt={campaignDetail.title}
                />
                <Pen
                  className="fas fa-pen img-pen"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="foo"
                  tabIndex={0}
                  onClick={() => setImgEditMode(true)}
                />
              </CampaignImgContainer>
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
                <Form className="CampaignTitleInput">
                  <label htmlFor="title">Nuevo título</label>
                  <Field
                    id="title"
                    name="title"
                    className="CampaignTitleInput-input"
                  />
                  <div>
                    <button
                      type="submit"
                      className="boton btn btn-primary btn-lg"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      className="boton btn btn-secondary btn-lg"
                      onClick={() => setTitleEditMode(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </Form>
              </Formik>
            ) : (
              <CampaignTitleContainer>
                <p className="campaign__title">{campaignDetail.title}</p>
                <Pen
                  className="fas fa-pen title-pen"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="foo"
                  tabIndex={0}
                  onClick={() => setTitleEditMode(true)}
                />
              </CampaignTitleContainer>
            )}
          </div>
          <EditDonationsCard
            campaignid={id}
            donationTimes={campaignDetail.donationTimes}
            donations={campaignDetail.donations}
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
                    <label htmlFor="category">Nueva categoría</label>
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
                      className="boton btn btn-primary btn-lg"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      className="boton btn btn-secondary btn-lg"
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
                  <Pen
                    className="fas fa-pen category-pen"
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
                  <Form className="CampaignDescriptionForm">
                    <label htmlFor="description">Nueva Descripción</label>
                    <Field
                      as="textarea"
                      id="description"
                      name="description"
                      type="document"
                      className="CampaignDescriptionInput"
                    />
                    <div>
                      <button
                        type="submit"
                        className="boton btn btn-primary btn-lg"
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        className="boton btn btn-secondary btn-lg"
                        onClick={() => setDescriptionEditMode(false)}
                      >
                        Cancelar
                      </button>
                    </div>
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
                  </button>{' '}
                  <Pen
                    className="fas fa-pen description-pen"
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="foo"
                    tabIndex={0}
                    onClick={() => setDescriptionEditMode(true)}
                  />
                </>
              )}
            </div>
            <ShareModal />
          </div>
        </main>
      )}
    </Container>
  );
};

export default Edit;

const Pen = styled.div`
  cursor: pointer;
`;
const ImgInput = styled.form`
  height: 240px;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div {
    width: 60%;
    display: flex;
    justify-content: space-around;
  }
`;
const Container = styled.div`
  .description-pen {
    margin-left: 8px;
  }
  .category-pen {
    margin-left: 8px;
  }
  .fa-tags {
    margin-right: 8px;
  }
  .CampaignTitleInput,
  .CampaignDescriptionForm {
    margin-top: 30px;
    min-height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .CampaignTitleInput-input {
      width: 100%;
      padding: 0 8px;
    }
    div {
      width: 30%;
      display: flex;
      justify-content: space-around;
    }
  }
  .CampaignDescriptionInput {
    width: 100%;
    padding: 8px;
    min-height: 120px;
    margin: 16px 0;
  }
`;
const CampaignTitleContainer = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CampaignImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 362px;
  img {
    position: absolute;
  }
  .img-pen {
    position: absolute;
    right: 80px;
    top: 30px;
    background-color: white;
    padding: 8px;
    border-radius: 25%;
  }
  .img-pen:hover {
    background-color: red;
  }
`;
