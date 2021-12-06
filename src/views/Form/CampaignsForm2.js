import { useNavigate } from "react-router";
import "./style.scss";
import React, { useState } from "react";

const CampaignsForm2 = () => {
  let navigate = useNavigate();
  const [form2, setForm2] = useState({});
  const handleChange = (e) => {
    setForm2({
      ...form2,
      [e.target.money]: e.target.value,
      [e.target.date]: e.target.value,
    });
  };
  return (
    <>
      <div className="root">
        <form action="" className="form-register">
          <div className="form-register__header">
            <ul className="progressbar">
              <li className="progressbar__option active"></li>
              <li className="progressbar__option active"></li>
              <li className="progressbar__option"></li>
            </ul>
            <h1 className="form-register__title">
              Establece el objetivo de tu campaña
            </h1>
          </div>
          <div className="form-register__body">
            <div className="step active" id="step-1">
              <div className="step__header"></div>
              <div className="step__body">
                <p>¿Cuánto te gustaría recaudar?</p>
                <input
                  type="text"
                  name="money"
                  id="money"
                  placeholder="USD"
                  value={form2.money}
                  onChange={handleChange}
                  className="step__input"
                />
                <p className="smalltext">
                  Ten en cuenta que de cada donativo se deducen comisiones por
                  transacción de pago, incluidos cargos por operaciones con
                  tarjetas de crédito y débito.
                </p>
                <p>¿Cuál es la fecha límite de recaudación?</p>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder=""
                  className="step__input"
                  value={form2.date}
                  onChange={handleChange}
                />
              </div>
              <div className="step__footer">
                <button
                  type="button"
                  className="step__button step__button--back"
                  data-to_step="1"
                  data-step="2"
                  onClick={() => navigate("/campaigns-form")}
                >
                  Regresar
                </button>
                <button
                  type="button"
                  className="step__button step__button--next"
                  data-to_step="2"
                  data-step="1"
                  onClick={() => navigate("/campaigns-form3")}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CampaignsForm2;
