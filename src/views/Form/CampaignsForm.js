import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router";

const CampaignsForm = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.place]: e.target.value,
    });
  };

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
                  value={form.name}
                  onChange={handleChange}
                  id="name"
                  placeholder="Tu nombre ej:Juan Pérez"
                  className="step__input"
                />
                <p>¿Dónde vives?</p>
                <input
                  type="text"
                  name="place"
                  value={form.place}
                  onChange={handleChange}
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
                <select
                  className="step__input"
                  name="category"
                  onChange={handleChange}
                >
                  <option value="Salud">Salud</option>
                  <option value="educacion">Educación</option>
                  <option value="In memoriam">In memoriam</option>
                  <option value="Animales">Animales</option>
                </select>
              </div>
              <div className="step__footer">
                <button
                  type="button"
                  className="step__button step__button--next"
                  data-to_step="2"
                  data-step="1"
                  onClick={() => navigate("/CampaignsForm2")}
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

export default CampaignsForm;
