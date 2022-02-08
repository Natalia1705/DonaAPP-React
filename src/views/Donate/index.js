import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import DonateAmountInput from '../../components/DonateAmountInput';
import SummaryCard from '../../components/SummaryCard';
import VoluntaryInput from '../../components/VoluntaryInput';
import config from '../../config';
import './styles.scss';

const { URL_BASE } = config;

const Donate = () => {
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

  const [voluntaryInput, setVoluntaryInput] = useState('15');
  const [donateAmount, setDonateAmount] = useState('');
  return (
    <Container>
      {loading ? (
        'cargando'
      ) : (
        <main className="main">
          <div className="donate">
            <div className="donate__text">
              <p className="donate__title">
                {'Estás apoyando a '}
                <span>{campaignDetail.name}</span>
              </p>
              <p className="donate__subtitle">
                {'Tu donativo tendrá como beneficiario/a '}{' '}
                <span>{campaignDetail.name}</span>
              </p>
            </div>
            <DonateAmountInput
              donateAmount={donateAmount}
              setDonateAmount={setDonateAmount}
            />
            <VoluntaryInput
              voluntaryInput={voluntaryInput}
              setVoluntaryInput={setVoluntaryInput}
            />
            <div className="warranty">
              <i className="fas fa-check-circle fa-2x warranty__icon" />
              <div className="warranty__text">
                <p className="warranty__title">Garantía Donapp</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, eveniet earum, omnis ullam in architecto ex odit sunt
                  hic,
                </p>
                <Link to="/">Más información</Link>
              </div>
            </div>
          </div>
          <SummaryCard
            voluntaryInput={voluntaryInput}
            donateAmount={donateAmount}
            id={id}
          />
        </main>
      )}
    </Container>
  );
};

export default Donate;

const Container = styled.div``;
