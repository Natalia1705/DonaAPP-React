/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setLogin } from '../../state/auth/navBarLoginSlice';
import Auth from '../../utils/Auth';
import config from '../../config';

const { URL_BASE } = config;

const YourCampaigns = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [campaigns, setCampaigns] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(setLogin());
    }
  }, []);

  const deleteHandler = async (e) => {
    const campaingId = e.target.attributes.campaingid.nodeValue;
    await fetch(`${URL_BASE}/campaigns/${campaingId}`, {
      method: 'DELETE',
    });
    setIsDelete(!isDelete);
  };
  useEffect(() => {
    fetch(`${URL_BASE}/campaigns/my-campaigns`, {
      headers: { usertoken: Auth.getSession().token },
    })
      .then((resp) => resp.json())
      .then((data) => setCampaigns(data.data.campaigns));
  }, [isDelete]);
  return (
    <Container>
      <div className="container">
        <div
          className="
          d-md-flex
          mt-5
          flex-md-row
          align-items-md-center
          justify-content-between
        "
        >
          <h4>Tus campañas</h4>
          <Link to="/campaignform">
            <button className="btn btn-outline-primary m-2" type="button">
              + Nueva recaudacion de fondos
            </button>
          </Link>
        </div>
        <div className="my-5">
          <div className="row">
            {campaigns.length
              ? campaigns.map((e) => (
                  <div className="p-0 col-md-6 col-lg-4" key={e._id}>
                    <div className="card m-3 shadow bg-body rounded">
                      <img
                        src={e.img}
                        className="card-img-top"
                        alt={e.title}
                        style={{ height: '200px' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title ms-3">{e.title}</h5>
                        <p className="card-text fw-light fs-6">
                          Fecha de creación:{/*  {timeAgo(e.date) */} ayer
                        </p>
                        <hr />
                        <Link
                          to={`/details/${e._id}`}
                          className="btn btn-outline-primary ms-2"
                          type="button"
                          data-cy="login"
                        >
                          Detalles
                        </Link>
                        <Link
                          to={`/details/edit/${e._id}`}
                          className="btn btn-outline-primary ms-2"
                        >
                          Editar
                        </Link>
                        <button
                          className="btn btn-outline-danger ms-2"
                          type="button"
                          data-cy="login"
                          onClick={deleteHandler}
                          campaingid={e._id}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : 'Parece que aún no tienes campañas creadas :('}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default YourCampaigns;

const Container = styled.div`
  margin-top: 150px;
`;
