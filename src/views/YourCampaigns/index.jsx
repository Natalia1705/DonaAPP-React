/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/Auth';

const YourCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/campaigns/my-campaigns', {
      headers: { usertoken: Auth.getSession().token },
    })
      .then((resp) => resp.json())
      .then((data) => setCampaigns(data.data.campaigns));
  }, []);

  return (
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
                    <img src={e.img} className="card-img-top" alt={e.title} />
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text fw-light fs-6">
                        Fecha de creación: {e.date}
                      </p>
                      <hr />
                      <a href="/" className="btn btn-outline-primary">
                        Editar
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : 'Parece que aún no tienes campañas creadas :('}
        </div>
      </div>
    </div>
  );
};

export default YourCampaigns;
