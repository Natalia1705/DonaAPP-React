import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useSearchParams } from 'react-router-dom';
import swal from 'sweetalert';
import Comments from '../../components/Comments';
import DonationsCard from '../../components/DonationsCard';
import ShareModal from '../../components/ShareModal';
import './styles.scss';
import config from '../../config';

const { URL_BASE } = config;

const Details = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [campaignDetail, setCampaignDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      // success
      swal('Se Dono!', 'El pago se realizo correctamente', 'success');
    }
    if (searchParams.get('success') === 'false') {
      // success
      swal('Ocurrio un problema', 'Intente de nuevo mas tarde', 'error');
    }
    setLoading(true);
    fetch(`${URL_BASE}/campaigns/${id}`, {})
      .then((resp) => resp.json())
      .then(
        (data) => {
          setCampaignDetail(data.data);
          setLoading(false);
        },
        /* setCampaignDetail(data.data.campaigns) */
      );
  }, []);

  const [showMore, setShowMore] = useState(true);
  const showMoreToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <Container>
      {loading ? (
        'cargando'
      ) : (
        <main className="details__main">
          <div className="campaign">
            <img className="campaign__img" src={campaignDetail.img} alt="" />
            <p className="campaign__title">{campaignDetail.title}</p>
          </div>
          <DonationsCard
            campaignid={id}
            donationTimes={campaignDetail.donationTimes}
            donations={campaignDetail.donations}
            goal={campaignDetail.objective}
          />
          <div className="description">
            <div className="description__tags">
              <p>
                <i className="fas fa-tags" />
                {campaignDetail.category}
              </p>
            </div>
            <div className="description__content">
              <p>
                {campaignDetail.description.split(' ').slice(0, 19).join(' ')}
                {showMore ? (
                  <span id="dots">...</span>
                ) : (
                  <span id="more">
                    {campaignDetail.description
                      .split(' ')
                      .slice(20, campaignDetail.description.split(' ').length)
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
            </div>
            <Comments
              name={campaignDetail.name}
              commentsDb={campaignDetail.commentsDb}
              id={id}
            />
            <ShareModal />
          </div>
        </main>
      )}
    </Container>
  );
};

export default Details;

const Container = styled.div``;
