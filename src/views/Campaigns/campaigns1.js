import React from "react";
import "./style.scss";

const Campaigns = () => {
  return (
    <>
      <div className="root">
        <form action="" className="form-register">
          <div className="form-register__header">
            <ul className="progressbar">
              <li className="progressbar__option active"></li>
              <li className="progressbar__option"></li>
              <li className="progressbar__option"></li>
            </ul>
            <h1 className="form-register__title">Inicia tu campaña</h1>
          </div>
          <div className="form-register__body">
            <div className="step active" id="step-1">
              <div className="step__body">
                <p>Nombre</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tu nombre ej:Juan Pérez"
                  className="step__input"
                />
                <p>¿Dónde vives?</p>
                <input
                  type="text"
                  name="place"
                  id="place"
                  placeholder=""
                  className="step__input"
                />
                <input
                  type="text"
                  name="place"
                  id="place"
                  placeholder=""
                  className="step__input"
                />
                <p>¿Para que estás recaudando fondos?</p>
                <select className="step__input" name="categoría">
                  <option value="Salud">Salud</option>
                  <option value="Emergencia">Educación</option>
                  <option value="Sepelio">In memoriam</option>
                  <option value="Sepelio">Animales</option>
                </select>
              </div>
              <div className="step__footer">
                <button
                  type="button"
                  className="step__button step__button--next"
                  data-to_step="2"
                  data-step="1"
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

export default Campaigns;
