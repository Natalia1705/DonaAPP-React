import { useNavigate } from "react-router-dom";
import "./style.scss";
import React, { useState } from "react";

const Campaigns = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [place, setPlace] = useState("");
  let [category, setCategory] = useState("");

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Tu nombre ej:Juan Pérez"
                  className="step__input"
                />
                <p>¿Dónde vives?</p>
                <input
                  type="text"
                  name="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  id="place"
                  placeholder=""
                  className="step__input"
                />
                <p>¿Para que estás recaudando fondos?</p>
                <select
                  className="step__input"
                  name={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="health">Salud</option>
                  <option value="emergency">Emergency</option>
                  <option value="funerals">In memoriam</option>
                  <option value="animals">Animales</option>
                </select>
              </div>
              <div className="step__footer">
                <button
                  type="button"
                  className="step__button step__button--next"
                  onClick={() => navigate("/campaigns-form2")}
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
