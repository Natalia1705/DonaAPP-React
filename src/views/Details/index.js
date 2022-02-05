import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Comments from '../../components/Comments';
import DonationsCard from '../../components/DonationsCard';
import ShareModal from '../../components/ShareModal';
import './styles.scss';
import config from '../../config';

const { URL_BASE } = config;

const Details = () => {
  const { id } = useParams();
  const [campaignDetail, setCampaignDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${URL_BASE}/campaigns/${id}`, {
      /* headers: { usertoken: Auth.getSession().token }, */
    })
      .then((resp) => resp.json())
      .then(
        (data) => {
          setCampaignDetail(data.data);
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
            commentsDb={commentsDb}
            goal={campaignDetail.objetive}
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
            <Comments name={campaignDetail.name} commentsDb={commentsDb} />
            <ShareModal />
          </div>
        </main>
      )}
    </Container>
  );
};

export default Details;

const Container = styled.div``;
