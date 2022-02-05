import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import DonateAmountInput from '../../components/DonateAmountInput';
import SummaryCard from '../../components/SummaryCard';
import VoluntaryInput from '../../components/VoluntaryInput';

import './styles.scss';

const Donate = () => {
  const { id } = useParams();
  const [campaignDetail, setCampaignDetail] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://fast-shelf-59848.herokuapp.com/api/campaigns/${id}`, {
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
            <button
              className="btn btn-primary checkout__show-button"
              type="button"
            >
              Continuar
            </button>
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
          />
        </main>
      )}
    </Container>
  );
};

export default Donate;

const Container = styled.div``;
