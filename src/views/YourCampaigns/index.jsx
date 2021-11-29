import { useState } from 'react'

const YourCampaigns = () => {
  const [campaigns] = useState([{}, {}, {}, {}])
  return (
    <div className='container'>
      <div
        className='
          d-md-flex
          mt-5
          flex-md-row
          align-items-md-center
          justify-content-between
        '
      >
        <h4>Tus campañas</h4>
        <button className='btn btn-outline-primary m-2'>
          + Nueva recaudacion de fondos
        </button>
      </div>
      <div className='my-5'>
        <div className='row'>
          {campaigns.map((el) => (
            <div className='p-0 col-md-6 col-lg-4'>
              <div className='card m-3 shadow bg-body rounded'>
                <img
                  src='https://placeimg.com/640/480/tech'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Mi campaña</h5>
                  <p className='card-text fw-light fs-6'>
                    Campaña creada hace 1 dia
                  </p>
                  <hr />
                  <a href='/' className='btn btn-outline-primary'>
                    Editar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default YourCampaigns
