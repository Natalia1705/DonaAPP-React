/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import swal from 'sweetalert';
import { setLogin } from '../../state/auth/navBarLoginSlice';
import Auth from '../../utils/Auth';
import config from '../../config';
import { timeAgo } from '../../utils/timer';
import LoaderComponent from '../../common/LoaderComponent';

const { URL_BASE } = config;

const YourCampaigns = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const session = Auth.getSession();
  const [campaigns, setCampaigns] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(setLogin());
    }
  }, []);

  const deleteHandler = async (e) => {
    swal({
      title: '¿Estás seguro?',
      text: 'Una vez la campaña es eliminada, esta acción no podrá ser revertida',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        setIsDelete(true);
        const campaingId = e.target.attributes.campaingid.nodeValue;
        await fetch(`${URL_BASE}/campaigns/${campaingId}`, {
          method: 'DELETE',
        });
        setIsDelete(false);
        swal.close();
        swal('Poof! ¡Tu camapaña fue eliminada con éxito!', {
          icon: 'success',
        });
      } else {
        swal('¡Tu camapaña está segura!');
      }
    });
  };
  useEffect(() => {
    fetch(`${URL_BASE}/campaigns/my-campaigns`, {
      headers: { Authorization: `Bearer ${session?.token}` },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCampaigns(data.data.campaigns);
      });
  }, [isDelete]);
  return (
    <Container>
      <LoaderComponent loading={isDelete} />
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
            <button
              className="btn btn-outline-primary m-2"
              type="button"
              data-cy="new-campaign-button"
            >
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
                          Publicado {timeAgo(e.date)}
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
                          data-cy="your-campaigns-delete-button"
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
