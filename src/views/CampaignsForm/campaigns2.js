import { useNavigate } from "react-router-dom";
import "./style.scss";
import React, { useState } from "react";

const Campaigns2 = () => {
  let navigate = useNavigate();
  let [money, setMoney] = useState("");
  let [date, setDate] = useState("");

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
                  value={money}
                  onChange={(e) => setMoney(e.target.value)}
                  id="money"
                  placeholder="USD"
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  id="date"
                  placeholder=""
                  className="step__input"
                />
              </div>
              <div className="step__footer">
                <button
                  type="button"
                  className="step__button step__button--back"
                  onClick={() => navigate("/campaigns-form")}
                >
                  Regresar
                </button>
                <button
                  type="button"
                  className="step__button step__button--next"
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

export default Campaigns2;
